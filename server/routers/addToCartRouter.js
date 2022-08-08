const express = require("express");
const {
  addItemToCart,
  addToCart,
  getCartItems,
  removeCartItems,
} = require("../controllers/cart");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  // auth,
  //   requireSignin,
  //   userMiddleware,
  addItemToCart
);
//router.post('/user/cart/addToCartByLogin', requireSignin, userMiddleware, addToCart);
router.post(
  "/user/getCartItems",
  // auth,
  // requireSignin, userMiddleware,
  getCartItems
);
//new update
router.post(
  "/user/cart/removeItem",
  // auth,
  //   requireSignin,
  //   userMiddleware,
  removeCartItems
);

// module.exports = router;
module.exports = router;
