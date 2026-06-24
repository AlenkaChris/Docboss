const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  downloadFile
} = require(
  "../controllers/downloadController"
);

router.get(
  "/:orderId",
  authMiddleware,
  downloadFile
);

module.exports = router;
