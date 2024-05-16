const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chat = Schema(
  {
    fromUser: { type: Schema.Types.ObjectId, ref: 'Users' },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("chat", chat);
