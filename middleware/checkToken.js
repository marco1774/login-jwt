const config = require("config");
const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  console.log("questo è il middleware", req.headers.authorization);
  try {
    var decoded = jwt.verify(
      req.headers.authorization,
      config.get("jwt-secret")
    );
    console.log("decoded", decoded);
  } catch (err) {
    console.error(err.message);
  }
  next();
}

module.exports = checkToken;
