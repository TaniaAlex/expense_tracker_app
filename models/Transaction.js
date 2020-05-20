const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  name: {
    type: String,
    trin: true,
    required: [true, "please add a transaction name"],
  },
  amount: {
    type: Number,
    required: [true, "please add positive or negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
