const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    const match = bcrypt.compareSync(password, user.password);

    if (match) return res.status(200).send("Login successful");

    return res.status(500).send("Login fail");
  } catch (err) {
    console.error("Error on login: ", err);
    return res.status(500).send("Error on login");
  }
});

module.exports = router;
