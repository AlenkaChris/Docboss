const mongoose = require("mongoose");

const DownloadSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },

  productId: {
    type: String,
    required: true
  },

  fileUrl: {
    type: String,
    required: true
  },

  downloadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Download", DownloadSchema);
