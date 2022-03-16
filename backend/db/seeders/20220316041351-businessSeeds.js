"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Businesses",
      [
        {
          name: faker.company.companyName(),
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: "12345",
          country: "United States",
          avg_review: 0,
          img_link: faker.image.business(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.company.companyName(),
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: "12345",
          country: "United States",
          avg_review: 0,
          img_link: faker.image.business(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.company.companyName(),
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: "12345",
          country: "United States",
          avg_review: 0,
          img_link: faker.image.business(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.company.companyName(),
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: "12345",
          country: "United States",
          avg_review: 0,
          img_link: faker.image.business(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.company.companyName(),
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: "12345",
          country: "United States",
          avg_review: 0,
          img_link: faker.image.business(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.company.companyName(),
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: "12345",
          country: "United States",
          avg_review: 0,
          img_link: faker.image.business(),
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
    await queryInterface.bulkDelete("Businesses", null, {});
  },
};
