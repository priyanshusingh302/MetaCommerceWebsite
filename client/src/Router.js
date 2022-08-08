import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import Navbar_ from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Cart from "./components/Cart/Cart";
import ItemLayout from "./components/layout/ItemLayout";
import ViewProduct from "./components/Items/ViewProduct";
import Profile from "./components/layout/Profile";
import CreateAvatar from "./components/avatar/CreateAvatar";
import ViewAvatar from "./components/avatar/ViewAvatar";
import Metaverse from "./Metaverse";
import Home from "./Home";
import { useEffect } from "react";
import axios from "axios";
import ViewVR from "./components/Items/ViewVR";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  const [CartSize, setCartSize] = useState(0);
  function getData() {
    axios
      .post("https://meta-creativity.herokuapp.com/api/user/getCartItems", {})
      .then((res) => {
        setCartSize(res.data.cartItems.length);
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {loggedIn === false ? (
          <>
            <Navbar_ badgeValue={CartSize} />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/CreateAvatar">
              <CreateAvatar />
            </Route>
            <Route path="/ViewAvatar">
              <ViewAvatar />
            </Route>
            <Route path="/Cart">
              <Cart cartItemsSize={CartSize} />
            </Route>
            <Route path="/Item">
              <ItemLayout />
            </Route>
            <Route path="/ViewProduct/:product">
              <ViewProduct />
            </Route>
            <Route path="/ViewVR">
              <ViewVR />
            </Route>
            <Route path="/Metaverse">
              <Metaverse />
            </Route>
          </>
        ) : (
          <>
            <Navbar_ badgeValue={CartSize} />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/customer">
              <Customers />
            </Route>
            <Route path="/Cart">
              <Cart cartItemsSize={CartSize} />
            </Route>
            <Route path="/Item">
              <ItemLayout />
            </Route>
            <Route path="/ViewProduct/:product">
              <ViewProduct />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/CreateAvatar">
              <CreateAvatar />
            </Route>
            <Route path="/ViewAvatar">
              <ViewAvatar />
            </Route>
            <Route path="/ViewVR">
              <ViewVR />
            </Route>
            <Route path="/Metaverse">
              <Metaverse />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
