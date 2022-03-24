"use strict";

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
          name: "Tech Inc.",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "61 Tallwood Ave.",
          city: "Lacey",
          state: "WA",
          zipcode: "98503",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://images.unsplash.com/photo-1563286094-6e420626b6f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Public Business",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "754 Maiden St.",
          city: "Rolloa",
          state: "MA",
          zipcode: "65401",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://images.unsplash.com/photo-1638786245283-98cb5933c49b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Therapy4Cats",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "835 Fairfield Avenue",
          city: "Herndon",
          state: "VA",
          zipcode: "20170",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoes Inc.",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "490 Peninsula St.",
          city: "Potomac",
          state: "MD",
          zipcode: "20854",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://images.unsplash.com/photo-1633464129147-777bdcc97c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juicy Juice",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "7697 Hill St.",
          city: "Hazleton",
          state: "PA",
          zipcode: "18201",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://images.unsplash.com/photo-1601599561213-832382fd07ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGp1Y2UlMjBzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "shouldaTradedRodgers",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "776 Brickyard St.",
          city: "Holbrook",
          state: "NY",
          zipcode: "11741",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpnYzV6_4zHMG-Y-y6g5FQICnsR0zj83pCw&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corner Store",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "6 Brandon St.",
          city: "Hook",
          state: "NY",
          zipcode: "11221",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://storage.googleapis.com/content.ezadtv.com/media/1/20200430_5eab189c0f762.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "8-12",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "12 main St.",
          city: "Town",
          state: "NY",
          zipcode: "11741",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://storage.googleapis.com/content.ezadtv.com/media/1/20200430_5eab189c0f762.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tools and such",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "12 Blue St.",
          city: "Blue Town",
          state: "NY",
          zipcode: "12341",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://storage.googleapis.com/content.ezadtv.com/media/1/20200430_5eab191262c28.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jerseys",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "12 Red St.",
          city: "Old Town",
          state: "NY",
          zipcode: "12341",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://estaticos.esmadrid.com/cdn/farfuture/MbtBfhVe3efxAqqu60-aKHGteupO-8lde0g2y5vLgns/mtime:1646729470/sites/default/files/styles/content_type_full/public/recursosturisticos/compras/real_madrid_gran_via_1.png?itok=JGN0tX6Q",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Creativity",
          userId: Math.floor(Math.random() * (3 - 1) + 1),
          address: "12 Imagination St.",
          city: "Rainbow Town",
          state: "NY",
          zipcode: "12341",
          country: "United States",
          avg_review: 0,
          img_link:
            "https://storage.googleapis.com/content.ezadtv.com/media/1/20200928_5f71edb8a63fd.png",
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
