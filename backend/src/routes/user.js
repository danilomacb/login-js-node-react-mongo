const express = require("express");

const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send("Users");
});

router.post("/", async (req, res) => {
  try {
    await User.create(req.body);

    return res.status(200).send("User registered");
  } catch (err) {
    console.error("Error on register: ", err);
    return res.status(500).send("Error on register");
  }
});

module.exports = router;
