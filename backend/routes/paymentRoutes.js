const express = require("express");

const router = express.Router();

router.post("/create-payment", async (req, res) => {
  try {
    res.json({
      message: "Payment route ready"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;
