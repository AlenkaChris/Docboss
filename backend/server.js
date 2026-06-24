const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const connectDB = require("./config/db");
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/payments", paymentRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    app: "DocBoss",
    status: "running"
  });
});

app.listen(5000, () => {
  console.log("DocBoss Server Running");
});
