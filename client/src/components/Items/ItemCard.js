import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tag from "./Tag";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
export default function ItemCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const ViewProductObject = {
    name: props.name,
    price: props.price,
    tagsUI: props.tagsUI,
    image: props.imageLink,
  };
  const setDataToLocalStorage = () => {
    window.localStorage.setItem(
      "ViewProduct",
      JSON.stringify(ViewProductObject)
    );
    history.push(`/ViewProduct/${props.id}`);
  };
  async function handleSetCartItem() {
    console.log(props);
    try {
      const CartData = {
        cartItems: [
          {
            product: props.id,
            name: props.name,
            price: props.price,
            tagsUI: props.tagsUI,
            imageLink: props.imageLink,
          },
        ],
      };

      await axios.post(
        "https://meta-creativity.herokuapp.com/api/user/cart/addtocart",
        CartData
      );
      // await axios.post(
      //   "https://mern-auth-template-tutorial.herokuapp.com/auth/login",
      //   loginData
      // );
      // await getLoggedIn();
      history.push("/Cart");
    } catch (err) {
      console.error(err);
    }
  }

  const [heartStyle, setHeartStyle] = React.useState("heart-outline");
  function HandleWishlist() {
    if (heartStyle === "heart-sharp") {
      setHeartStyle("heart-outline");
    } else {
      setHeartStyle("heart-sharp");
    }
  }
  function ViewVR() {
    history.push(`/ViewVR/?imageURL=${props.imageLink}`);
  }
  return (
    <Card className="m-3" style={{ minWidth: "15rem" }}>
      <Card.Img
        variant="top"
        src={props.imageLink}
        alt="Image not available"
        style={{ height: "15rem", width: "100%", objectFit: "cover" }}
      />
      <Card.Body>
        <div style={{ display: "flex" }}>
          <Card.Title>{props.name}</Card.Title>

          <ion-icon
            name={heartStyle}
            style={{ marginLeft: "9rem", color: "#fb0066", fontSize: "35px" }}
            // onClick={HandleWishlist}
          ></ion-icon>
        </div>
        <Card.Text style={{ minHeight: "5rem" }}>
          {props.tagsUI.map((item) => {
            return <Tag value={item} />;
          })}
        </Card.Text>

        <div style={{ display: "flex" }}>
          <button
            type="button"
            class="btn btn-light my-1"
            style={{ display: "flex" }}
          >
            <ion-icon name="pricetag-outline" size="medium"></ion-icon>
            {props.price}/-
          </button>
        </div>
        <div>
          <Button
            variant="outline"
            style={{ color: "#20BEAD", borderColor: "#20BEAD" }}
            onClick={handleSetCartItem}
          >
            ADD TO CART
          </Button>
          <Button
            variant="success mx-2"
            style={{ backgroundColor: "" }}
            onClick={setDataToLocalStorage}
          >
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </Button>
          <Button
            variant="success"
            style={{ backgroundColor: "" }}
            onClick={ViewVR}
          >
            VR
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
