const express = require("express");
const router = express.Router();
const Drug = require("../Models/Drug");
const { response } = require("express");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const { json } = require("body-parser");

router.post(
  "/upload/drug",
  [
    check("name", "Name must be filled").not().isEmpty(),
    check("SellerId", "SellerID must be filled").not().isEmpty(),
    check("prescription", "Perscription must be filled").not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      var data1 = req.body;
      var name = data1.name;
      var SellerId = data1.SellerId;
      var prescription = data1.prescription;
      console.log(data1);
      var data = new Drug({
        name: name,
        SellerId: SellerId,
        prescription: prescription,
      });
      data
        .save()
        .then(function () {
          res.status(200).json({ success: true, msg: "Successfully Uploaded" });
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
