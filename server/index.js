const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

// set up server
const Product = require("./models/productModel");
const { Customer } = require("./models/customerModel");

// connect to mongoDB
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://majestic-kitsune-23701c.netlify.app",
      "https://e-creativity.herokuapp.com/",
      "http://127.0.0.1:5500/index.html",
      "http://127.0.0.1:5500/index%20(1).html",
      "http://127.0.0.1:5500",
      "https://stellar-donut-7119ad.netlify.app/",
    ],
    credentials: true,
  })
);

// set up routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));

app.use("/product", require("./routers/productRouter"));

app.use("/tags", require("./routers/tagsRouter.js"));
app.use("/wishlist", require("./routers/wishlistRouter.js"));
app.use("/api", require("./routers/addToCartRouter"));
// Ecart
// 6jzyu7NVRqjdhUcm
