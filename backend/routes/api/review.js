const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Review } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
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
  check("img_link")
    .exists({ checkFalsy: true })
    .matches(/\.(jpeg|jpg|gif|png)$/)
    .withMessage(
      "Please provide an image with either extensions: .jpeg .jpg .gif .png"
    ),
  check("review")
    .exists({ checkFalsy: true })
    .isLength({ min: 5, max: 255 })
    .withMessage(
      "Please provide a review with at least 5 characters and a max of 255 characters."
    ),
  check("rating")
    .exists({ checkFalsy: true })
    .if((value, { req }) => req.body.rating > 0 || req.body.rating <= 5)
    .withMessage("Please provide a rating between 0 and 5."),
  handleValidationErrors,
];

router.post(
  "/",
  validateNewReview,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, businessId, rating, review, img_link } = req.body;
    const newReview = await Review.create({
      userId,
      businessId,
      rating,
      review,
      img_link,
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
  validateNewReview,
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    await Review.update(req.body, {
      where: { id },
      returning: true,
      plain: true,
    });

    const review = await Review.findByPk(id);

    return res.json(review);
  })
);

module.exports = router;
