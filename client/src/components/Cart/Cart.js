import React from "react";
import { useEffect } from "react";
import CartCard from "./CartCard";
import CartSummary from "./CartSummary";
import axios from "axios";

export default function Cart(props) {
  const [Cart, setCart] = React.useState([]);
  const [cartLength, setCartLength] = React.useState(0);
  const url = "https://meta-creativity.herokuapp.com";
  function getData() {
    axios
      .post(url + "/api/user/getCartItems", {})
      .then((res) => {
        setCart(res.data.cartItems);
        setCartLength(Cart.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getData();
    console.log("Cart" + props.cartItemsSize);
  }, []);

  const RemoveFromCarT = (ViewProductObject) => {
    axios
      .post(url + "/api/user/cart/removeItem", {
        payload: ViewProductObject.id,
      })
      .then((res) => {
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <CartSummary CartSize={props.cartItemsSize} />
      <div className="container">
        <div className="row">
          {Cart.map((item) => {
            return (
              <div className="col">
                <CartCard
                  name={item.name}
                  imageLink={item.imageLink}
                  tagsUI={item.tagsUI}
                  tags={item.tags}
                  price={item.price}
                  id={item._id}
                  RemoveFromcartObject={RemoveFromCarT}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
