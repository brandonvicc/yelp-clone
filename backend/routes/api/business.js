const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Business } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const businesses = await Business.findAll();
    return res.json({ businesses });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const business = await Business.findOne({ where: { id: req.params.id } });
    return res.json({ business });
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

    const business = await Business.findByPk(newBusiness.id);
    console.log("\n\n\n Business Created \n\n\n");
    console.log("\n\n\n", business, "\n\n\n\n");
    return res.json({ business });
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const business = await Business.findByPk(req.params.id);
    if (!business) throw new Error("No business with that id");
    Business.destroy({ where: { id: business.id } });

    return res.json({ business });
  })
);

router.put(
  "/:id",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    await Business.update(req.body, {
      where: { id },
      returning: true,
      plain: true,
    });

    const business = await Business.findByPk(id);

    return res.json(business);
  })
);

module.exports = router;
