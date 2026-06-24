const axios = require("axios");

exports.createPayment = async (req, res) => {
  try {
    const { price, orderId } = req.body;

    const payment = await axios.post(
      "https://api.nowpayments.io/v1/payment",
      {
        price_amount: price,
        price_currency: "USD",
        pay_currency: "btc",
        order_id: orderId,
        order_description: "DocBoss File Purchase"
      },
      {
        headers: {
          "x-api-key":
            process.env.NOWPAYMENTS_API_KEY
        }
      }
    );

    res.json(payment.data);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
