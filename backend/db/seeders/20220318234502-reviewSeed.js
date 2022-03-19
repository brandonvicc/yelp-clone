"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          businessId: Math.floor(Math.random() * (6 - 1) + 1),
          review: "Amazing",
          rating: Math.floor(Math.random() * (5 - 1) + 1),
          img_link:
            "https://media-exp1.licdn.com/dms/image/C5612AQGqDoQJX53r9A/article-cover_image-shrink_600_2000/0/1520106344156?e=1648684800&v=beta&t=1uJN0zQz3ng_6-U5GNS3er7vFduxWZkkSa47yqprcx8",
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
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
