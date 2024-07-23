require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//para ma import ang mga routes
const CreateUsers_Route = require("./Routes/CreateUsers_Route");

const app = express();
const PORT = process.env.PORT || 4000;

//para maka send og request ang client side
app.use(cors());

//middleware para maka gamit kag req.body
app.use(express.json());

//para ma bal an ang requests gekan frontend
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//middleware sa pag create og lahi2 na accounts
app.use("/api/users", CreateUsers_Route);

//Database connection ni diri
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("You are connected to the database!!");
    app.listen(PORT, () => {
      console.log("listening on port 4000");
    });
  })

  .catch((error) => {
    console.log("Could not connect to database!");
    console.log(error);
  });
