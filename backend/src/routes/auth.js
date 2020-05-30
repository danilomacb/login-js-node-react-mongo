const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(500).send({ message: "User not found" });

    const match = bcrypt.compareSync(password, user.password);

    if (match) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      return res.status(200).send({ message: "Login successful", token });
    }

    return res.status(500).send({ message: "Invalid password" });
  } catch (err) {
    console.error("Error on login: ", err);
    return res.status(500).send({ message: "Error on login" });
  }
});

module.exports = router;
