const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send("Users");
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hash = bcrypt.hashSync(password, parseInt(process.env.SALT));

    await User.create({ email, password: hash });

    return res.status(200).send("User registered");
  } catch (err) {
    console.error("Error on register: ", err);
    return res.status(500).send("Error on register");
  }
});

module.exports = router;
