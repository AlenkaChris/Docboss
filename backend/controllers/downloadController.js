const Order = require("../models/Order");

exports.downloadFile = async (req, res) => {
  try {

    const order = await Order.findById(
      req.params.orderId
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    if (order.paymentStatus !== "paid") {
      return res.status(403).json({
        message: "Payment required"
      });
    }

    res.json({
      success: true,
      downloadLink:
        order.downloadToken
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
