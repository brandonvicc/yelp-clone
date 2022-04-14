const router = require("express").Router();
const { googleMapsAPIKey } = require("../../config");

router.post("/key", (req, res) => {
  console.log("request key");
  res.json({ googleMapsAPIKey });
});

module.exports = router;
