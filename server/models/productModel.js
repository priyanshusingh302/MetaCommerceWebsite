const mongoose = require("mongoose");
const tags_model = require("./tagsModel.js");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  tagsUI: { type: Array, required: true },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tags_model",
      required: false,
    },
  ],
  imageLink: { type: String, required: true },
});

module.exports = mongoose.model("product", productSchema);
