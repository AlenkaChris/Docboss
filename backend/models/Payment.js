const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  userId: String,

  productId: String,

  amount: Number,

  cryptoCurrency: String,

  paymentStatus: {
    type: String,
    default: "pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Payment", PaymentSchema);
