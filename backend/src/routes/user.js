const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const hash = bcrypt.hashSync(password, parseInt(process.env.SALT));

  try {
    const user = await User.findOne({ email });

    if (user) return res.status(500).send({ message: "Email already registered" });

    await User.create({ email, password: hash });

    return res.status(200).send({ message: "User registered" });
  } catch (err) {
    console.error("Error on register: ", err);
    return res.status(500).send({ message: "Error on register" });
  }
});

module.exports = router;
