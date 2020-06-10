require("dotenv").config({ path: __dirname + "/../.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const user = require("./routes/user");
const login = require("./routes/login");
const protected = require("./routes/protected");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", user);
app.use("/login", login);
app.use("/protected", protected);

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) return console.error("Error on mongoose connect: ", err);
  }
);

app.listen(process.env.PORT, () =>
  console.log("listening at http://localhost:" + process.env.PORT)
);
