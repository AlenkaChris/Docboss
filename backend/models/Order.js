const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },

  amount: Number,

  paymentStatus: {
    type: String,
    default: "pending"
  },

  downloadToken: String
}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Order",
  OrderSchema
);
