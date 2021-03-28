var express = require("express");
var router = express.Router();
var Project = require("../models/projectModel");

// GET all
router.get("/", (req, res) => {
  Project.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Project.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Project(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Create data Success!");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Project.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Update data Success!");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Project.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Delete data Success!");
  });
});

module.exports = router;