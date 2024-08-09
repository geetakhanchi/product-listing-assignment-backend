const express = require("express");
const Product = require("./schema");

const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  const response = await Product.find({});
  return res.status(200).json(response);
});

productsRouter.post("/", async (req, res) => {
  const request = req.body;

  const newProduct = new Product({
    ...request,
  });
  try {
    await newProduct.save();
  } catch (err) {
    return res.status(400).json({ message: "some error occurred" });
  }

  return res.status(200).json({});
});

module.exports = productsRouter;
