"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Businesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      zipcode: {
        type: Sequelize.STRING(5),
        allowNull: false,
        validate: {
          len: [5, 5],
        },
      },
      country: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      lat: {
        type: Sequelize.INTEGER,
      },
      lng: {
        type: Sequelize.INTEGER,
      },
      avg_review: {
        type: Sequelize.INTEGER,
      },
      img_link: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Businesses");
  },
};
