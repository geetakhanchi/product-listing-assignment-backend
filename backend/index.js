const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./router");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use("/api/products", productsRouter);

const mongoConnector =
  "mongodb+srv://gitukhanchi93:momo@cluster0.iglhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoConnector)
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port 8000");
    });
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err, "error");
  });
