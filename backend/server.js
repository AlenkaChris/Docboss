const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());
app.use(cors());

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
