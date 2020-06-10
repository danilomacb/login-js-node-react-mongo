const express = require("express");

const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/", (req, res) => {
  res.send({ email: req.userEmail });
});

module.exports = router;
