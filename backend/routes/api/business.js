const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Business } = require("../../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const businesses = await Business.findAll();
  console.log(businesses);
  return res.json({ businesses });
});

module.exports = router;
