const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed },
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
