import React, { useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
export default function Item(props) {
  const [product, setProduct] = useState([]);

  async function getProducts() {
    const ProductRes = await axios.get(
      "https://meta-creativity.herokuapp.com/product/"
    );
    setProduct(ProductRes.data);
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {props.DataToFetch.length > 0 ? (
            <>
              {props.DataToFetch.map((item) => {
                return (
                  <div className="col">
                    <ItemCard
                      name={item.name}
                      imageLink={item.imageLink}
                      tagsUI={item.tagsUI}
                      price={item.price}
                      id={item._id}
                      BadgeData={props.BadgeData}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {product.map((item) => {
                return (
                  <div className="col">
                    <ItemCard
                      name={item.name}
                      imageLink={item.imageLink}
                      tags={item.tags}
                      tagsUI={item.tagsUI}
                      price={item.price}
                      id={item._id}
                      BadgeData={props.BadgeData}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
