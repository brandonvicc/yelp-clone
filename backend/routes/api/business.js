const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Business, Review, User, Like } = require("../../db/models");
const {
  singleMulterUpload,
  singlePublicFileUpload,
  retrievePrivateFile,
  deleteFile,
} = require("../../utils/awsS3");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const businesses = await Business.findAll({
      include: {
        model: Review,
        include: User,
      },
      order: [["updatedAt", "DESC"]],
    });
    return res.json({ businesses });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const business = await Business.findOne({
      where: { id: req.params.id },
      include: {
        model: Review,
        include: User,
      },
    });
    if (!business) throw new Error("No business found");
    return res.json({ business });
  })
);

router.get(
  "/:id/reviews",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
      where: { businessId: req.params.id },
      include: [User, Like],
      order: [["updatedAt", "DESC"]],
    });
    return res.json({ reviews });
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
      "Please provide an address with at least 4 characters and a max of 50 characters."
    ),
  check("city")
    .exists({ checkFalsy: true })
    .isLength({ min: 4, max: 30 })
    .withMessage(
      "Please provide a city with at least 4 characters and a max of 30 characters."
    ),
  check("state")
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "Please provide a state with at least 2 characters and a max of 30 characters."
    ),
  check("country")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "Please provide a country with at least 4 characters and a max of 30 characters."
    ),
  check("zipcode")
    .exists({ checkFalsy: true })
    .isLength({ min: 5, max: 5 })
    .matches(/^\d{5}$/)
    .withMessage("Please provide a zipcode with 5 numbers."),
  // check("img_link")
  //   .exists({ checkFalsy: true })
  //   // .matches(/\.(jpeg|jpg|gif|png)$/)
  //   .withMessage("Please provide an image"),
  // check('fileInputFieldName')
  // .custom((value, { req }) => {
  //   if (req.files.mimetype === "application/pdf") {
  //     return ".pdf"; // return "non-falsy" value to indicate valid data"
  //   } else {
  //     return false; // return "falsy" value to indicate invalid data
  //   }
  // })
  // .withMessage("Please only submit pdf documents."),
  handleValidationErrors,
];

router.post(
  "/",
  singleMulterUpload("img_link"),
  validateNewBusiness,
  asyncHandler(async (req, res) => {
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
      avg_review,
    } = req.body;

    const businessImageUrl = await singlePublicFileUpload(req.file);

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
      img_link: businessImageUrl,
      avg_review,
    });

    const business = await Business.findByPk(newBusiness.id);
    return res.json({ business });
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const business = await Business.findByPk(req.params.id);
    if (!business) throw new Error("No business with that id");
    await deleteFile(business.img_link.split("com/")[1]);
    await business.destroy();

    return res.json({ business });
  })
);

router.put(
  "/:id",
  singleMulterUpload("img_link"),
  validateNewBusiness,
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const id = req.body.id;
    delete req.body.id;

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
      avg_review,
    } = req.body;

    let business = await Business.findByPk(id);

    let businessImageUrl;
    if (req.file) {
      businessImageUrl = await singlePublicFileUpload(req.file);
      await deleteFile(business.img_link.split("com/")[1]);
    } else {
      businessImageUrl = business.img_link;
    }

    await Business.update(
      {
        name,
        userId,
        address,
        city,
        state,
        country,
        zipcode,
        lat,
        lng,
        avg_review,
        img_link: businessImageUrl,
      },
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );

    business = await Business.findByPk(id);

    return res.json(business);
  })
);

router.post(
  "/search",
  asyncHandler(async (req, res) => {
    const { searchType, searchData } = req.body;
    let businesses;

    if (searchType === "name") {
      businesses = await Business.findAll({
        where: { name: { [Op.substring]: searchData } },
        include: {
          model: Review,
          include: User,
        },
        order: [["updatedAt", "DESC"]],
      });
    }
    if (searchType === "state") {
      businesses = await Business.findAll({
        where: { state: { [Op.substring]: searchData } },
        include: {
          model: Review,
          include: User,
        },
        order: [["updatedAt", "DESC"]],
      });
    }
    if (searchType === "zipcode") {
      businesses = await Business.findAll({
        where: { zipcode: { [Op.substring]: searchData } },
        include: {
          model: Review,
          include: User,
        },
        order: [["updatedAt", "DESC"]],
      });
    }

    return res.json({ businesses });
  })
);

module.exports = router;
