const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Business } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const businesses = await Business.findAll();
    return res.json({ businesses });
  })
);

const validateNewBusiness = [
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ min: 4, max: 30 })
    .withMessage(
      "Please provide a business name with at least 4 characters and a max of 30 characters."
    ),
  check("userId")
    .exists({ checkFalsy: true })
    .withMessage("Please login to start a business"),
  check("address")
    .exists({ checkFalsy: true })
    .isLength({ min: 4, max: 50 })
    .withMessage(
      "Please provide an address name with at least 4 characters and a max of 50 characters."
    ),
  check("city")
    .exists({ checkFalsy: true })
    .isLength({ min: 4, max: 30 })
    .withMessage(
      "Please provide a city name with at least 4 characters and a max of 30 characters."
    ),
  check("state")
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "Please provide a state name with at least 2 characters and a max of 30 characters."
    ),
  check("country")
    .exists({ checkFalsy: true })
    .isLength({ min: 4, max: 30 })
    .withMessage(
      "Please provide a country name with at least 4 characters and a max of 30 characters."
    ),
  check("zipcode")
    .exists({ checkFalsy: true })
    .isLength({ min: 5, max: 5 })
    .withMessage("Please provide a zipcode with 5 characters."),
  check("img_link")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an image."),
  handleValidationErrors,
];

router.post(
  "/",
  validateNewBusiness,
  asyncHandler(async (req, res) => {
    console.log("\n\n\n in the route \n\n\n ");
    console.log("req: ", req.body, "\n\n\n");
    const {
      name,
      userId,
      address,
      city,
      state,
      country,
      zipcode,
      lat,
      lng,
      img_link,
      avg_review,
    } = req.body;
    const newBusiness = await Business.create({
      name,
      userId,
      address,
      city,
      state,
      country,
      zipcode,
      lat,
      lng,
      img_link,
      avg_review,
    });

    console.log("\n\n\n Business Created \n\n\n");
    console.log("\n\n\n", newBusiness, "\n\n\n\n");

    const business = await Business.findByPk(newBusiness.id);
    return res.json({ business });
  })
);

module.exports = router;
