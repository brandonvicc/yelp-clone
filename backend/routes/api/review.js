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

module.exports = router;
