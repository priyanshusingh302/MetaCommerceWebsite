const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

function runUpdate(condition, updateData) {
  return new Promise((resolve, reject) => {
    //you update code here
    Cart.findOneAndUpdate(condition, updateData, { upsert: true })
      .then((result) => resolve())
      .catch((err) => reject(err));
  });
}
exports.addItemToCart = (req, res) => {
  console.log(req.cookies.user);
  Cart.findOne({ user: "62caaf9b9e347b7798dd4d8e" }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      //if cart already exists then update cart by quantity
      let promiseArray = [];

      req.body.cartItems.forEach((cartItem) => {
        const product = cartItem.product;
        const name = product.name;
        const imageLink = product.imageLink;
        const tagsUI = product.tagsUI;
        const price = product.price;
        const item = cart.cartItems.find((c) => c.product == product);
        let condition, update;
        if (item) {
          condition = {
            user: req.cookies.user,
            "cartItems.product": product,
            "cartItems.name": name,
            "cartItems.imageLink": imageLink,
            "cartItems.tagsUI": tagsUI,
            "cartItems.price": price,
          };

          update = {
            $set: {
              "cartItems.$": cartItem,
            },
          };
        } else {
          condition = { user: req.cookies.user };
          update = {
            $push: {
              cartItems: cartItem,
            },
          };
        }
        promiseArray.push(runUpdate(condition, update));
      });
      Promise.all(promiseArray)
        .then((response) => res.status(201).json({ response }))
        .catch((error) => res.status(400).json({ error }));
    } else {
      //if cart not exist then create a new cart
      const cart = new Cart({
        user: req.cookies.user,
        cartItems: req.body.cartItems,
      });
      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};

exports.getCartItems = (req, res) => {
  Cart.findOne({ user: req.cookies.user }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      let cartItems = [];

      cart.cartItems.forEach((item, index) => {
        console.log(item);
        cartItems.push({
          _id: item.product._id.toString(),
          qty: item.quantity,
          name: item.name,
          imageLink: item.imageLink,
          price: item.price,
          tagsUI: item.tagsUI,
        });
      });
      res.status(200).json({ cartItems });
    }
  });
};
// new update remove cart items
exports.removeCartItems = (req, res) => {
  const productId = req.body.payload;
  if (productId) {
    Cart.update(
      { user: req.cookies.user },
      {
        $pull: {
          cartItems: {
            product: productId,
          },
        },
      }
    ).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  }
};
