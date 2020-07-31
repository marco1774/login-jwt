const express = require("express");
const router = express.Router();

module.exports = router.get("/", (req, res) => {
  console.log("route login");
  res.status(200).json({ mes: "route login" });
});
