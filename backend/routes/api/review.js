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
    .withMessage("Please provide an image."),
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

module.exports = router;
