const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
  profilePic:{ type: String, required: false },
  user_id: { type: String, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("file", fileSchema);