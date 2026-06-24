const Order = require("../models/Order");

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.id
    }).populate("productId");

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
