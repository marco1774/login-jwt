const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const UserRegisterSchema = require("../mongoose/model/UserSchema");

module.exports = router.post(
  "/",
  [
    check("email", "email is required").not().isEmpty(),
    check("password", "Password is required (min=6)")
      .not()
      .isEmpty()
      .isLength(6),
  ],
  async (req, res) => {
    // validation

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log("route register", req.body);
    const { name, email, password } = req.body;
    try {
      // build obj user
      const user = new UserRegisterSchema({
        name,
        email,
        password,
      });
      // Crypt password
      const salt = await bcrypt.genSalt(10);
      let passCrypted = await bcrypt.hash(user.password, salt);
      user.password = passCrypted;

      // cercare se email è già presente
      // creare  e restituire jwt

      let result = await user.save();
      console.log("route register saved", result);

      res.status(200).json({ result });
    } catch (error) {
      console.error(error.message);
      res.status(400).json(error.message);
    }
  }
);
