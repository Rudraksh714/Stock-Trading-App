const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  availableCash: {
    type: Number,
    default: 100000,
  },

  transactions: [
    {
      type: {
        type: String,
        enum: ["ADD", "WITHDRAW"],
        required: true,
      },

      amount: {
        type: Number,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = { FundsSchema };