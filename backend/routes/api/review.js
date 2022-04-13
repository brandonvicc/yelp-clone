const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Review } = require("../../db/models");
const {
  singleMulterUpload,
  singlePublicFileUpload,
} = require("../../utils/awsS3");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({ order: [["updatedAt", "DESC"]] });
    return res.json({ reviews });
  })
);

const validateNewReview = [
  check("userId")
    .exists({ checkFalsy: true })
    .withMessage("Please login to leave a review"),
  check("businessId")
    .exists({ checkFalsy: true })
    .withMessage("Business does not exist"),
  // check("img_link")
  //   .exists({ checkFalsy: true })
  //   .matches(/\.(jpeg|jpg|gif|png)$/)
  //   .withMessage(
  //     "Please provide an image with either extensions: .jpeg .jpg .gif .png"
  //   ),
  check("review")
    .exists({ checkFalsy: true })
    .isLength({ min: 5, max: 255 })
    .withMessage(
      "Please provide a review with at least 5 characters and a max of 255 characters."
    ),
  check("rating")
    .exists({ checkFalsy: true })
    .if((value, { req }) => req.body.rating > -1 || req.body.rating <= 5)
    .withMessage("Please provide a rating between 1 and 5."),
  handleValidationErrors,
];

router.post(
  "/",
  singleMulterUpload("img_link"),
  validateNewReview,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, businessId, rating, review } = req.body;

    const reviewImageUrl = await singlePublicFileUpload(req.file);

    const newReview = await Review.create({
      userId,
      businessId,
      rating,
      review,
      img_link: reviewImageUrl,
    });
    const reviewCreated = await Review.findByPk(newReview.id);
    return res.json({ reviewCreated });
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id);
    if (!review) throw new Error("No review with that id");
    Review.destroy({ where: { id: review.id } });

    return res.json({ review });
  })
);

router.put(
  "/:id",
  singleMulterUpload("img_link"),
  validateNewReview,
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const id = req.body.id;
    delete req.body.id;

    const { userId, businessId, rating, review, img_link } = req.body;

    let reviewImageUrl;
    if (req.file) {
      reviewImageUrl = await singlePublicFileUpload(req.file);
    } else {
      reviewImageUrl = img_link;
    }

    await Review.update(
      { userId, businessId, rating, review, img_link: reviewImageUrl },
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );

    const editedReview = await Review.findByPk(id);

    return res.json(editedReview);
  })
);

module.exports = router;
