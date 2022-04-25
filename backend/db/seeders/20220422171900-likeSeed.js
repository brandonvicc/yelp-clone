"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Likes",
      [
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (7 - 1) + 1),
          reviewId: Math.floor(Math.random() * (30 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
    await queryInterface.bulkDelete("Likes", null, {});
  },
};
