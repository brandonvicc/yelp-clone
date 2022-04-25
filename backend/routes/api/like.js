const express = require("express");
const asyncHandler = require("express-async-handler");
const { Business, Review, User, Like } = require("../../db/models");

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, reviewId, businessId } = req.body;
    let toDestroy;

    const likes = await Like.findAll({ where: { reviewId } });

    for (let i = 0; i < likes.length; i++) {
      let like = likes[i];
      if (like.userId === userId) {
        toDestroy = like;
      }
    }

    if (toDestroy) {
      await toDestroy.destroy();
    } else {
      const newLike = await Like.create({ userId, reviewId });
    }
    const reviews = await Review.findAll({
      where: { businessId },
      include: [User, Like],
      order: [["updatedAt", "DESC"]],
    });
    return res.json({ reviews });
  })
);

module.exports = router;
