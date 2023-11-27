import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Product = ({ id, title, price, addToBasket }) => {
  return (
    <div className="product col-lg-2">
      <Link to={`/ProductDetail/${id}`}>
        <div className="product-content">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
      </Link>
      <button onClick={() => addToBasket()}>Add to basket</button>
    </div>
  );
};

export default Product;
