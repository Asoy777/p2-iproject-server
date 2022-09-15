"use strict";

const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({ message: "New Troubleloka" });
  } catch (error) {
    next(error);
  }
});


module.exports = router;