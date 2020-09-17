var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Student = require("../models/Student.js");

/* GET ALL students */
router.get("/", function (req, res, next) {
  Student.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get("/checkin", function (req, res, next) {
  //var query = req.query.checkin;
  Student.find({ checkin: "yes" }, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get("/checkinnot", function (req, res, next) {
  //var query = req.query.checkin;
  Student.find({ checkin: "No" }, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

//Find by name

router.get("/name", function (req, res, next) {
  var name = req.query.name;
  Student.findOne({ Name: name }, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get("/:id", function (req, res, next) {
  Student.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post("/", function (req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put("/:id", function (req, res, next) {
  Student.findByIdAndUpdate(
    req.params.id,
    { checkin: "yes" },
    (err, newPoke) => {
      console.log("Student checkin has Been Updated ", newPoke);
    }
  );
});

/* DELETE BOOK */
router.delete("/:id", function (req, res, next) {
  Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*New update*/
router.post("/update/:id", function (req, res, next) {
  Student.findById(req.params.id)
    .then((student) => {
      student.pantherid = req.body.pantherid;
      student.name = req.body.name;
      student.checkin = "yes";
      student
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
