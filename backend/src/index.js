require("dotenv").config({ path: __dirname + "/../.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const user = require("./routes/user");
const auth = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", user);
app.use("/auth", auth);

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) return console.error("Error on mongoose connect: ", err);
  }
);

app.listen(process.env.PORT, () =>
  console.log("listening at http://localhost:" + process.env.PORT)
);
