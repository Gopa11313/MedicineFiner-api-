const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Seller = require("../Models/Sellers");
const { response } = require("express");
const saltRounds = 10;
const multer = require("multer");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const { check, validationResult } = require("express-validator");
const { json } = require("body-parser");

router.post(
  "/register/user",
  [
    check("name", "Name must be filled").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("password", "Password must be 6 latter long").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      var data1 = req.body;
      var name = data1.name;
      var email = data1.email;
      var password = data1.password;
      var role = "User";
    }
  }
);
module.exports = router;
