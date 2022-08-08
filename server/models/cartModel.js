const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
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
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
