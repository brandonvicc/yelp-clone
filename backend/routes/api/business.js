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
    console.log(businesses);
    return res.json({ businesses });
  })
);

router.post(
  "/new",
  asyncHandler(async (req, res) => {})
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

module.exports = router;
