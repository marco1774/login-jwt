const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/checkToken");

module.exports = router.get("/", checkToken, (req, res) => {
  console.log("route login");
  res.status(200).json({ mes: "route login" });
});
