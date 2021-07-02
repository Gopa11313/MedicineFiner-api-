const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Seller = require("../Models/Sellers");
const bcrypt = require("bcryptjs");
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
      var image = "this is image";
      var role = "User";
      var latitude = data1.latitude;
      var longitude = data1.longitude;
      const hash = bcrypt.hashSync(password, saltRounds);
      var data = new Seller({
        name: name,
        email: email,
        password: password,
        image: image,
        latitude: latitude,
        longitude: longitude,
        role: role,
      });
      data
        .save()
        .then(function () {
          res.status(200).json({ success: true, msg: "User Register Success" });
        })
        .catch(function (e) {
          res.status(201).json({ success: false, msg: "Some Error Occurs" });
        });
    } else {
      res.status(201).json({ success: false, msg: "Error" });
    }
  }
);
module.exports = router;
