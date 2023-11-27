import React from "react";
import Product from "../Product";
import useFetch from "../../hooks/useFetch";
import "./index.scss";

const Products = ({addToBasket}) => {
  const baseUrl = "https://fakestoreapi.com/products";
  const { data } = useFetch(baseUrl);
  return (
    <div className="products row">
      {data &&
        data.map((product) => (
          <Product  addToBasket={() => addToBasket(product)} {...product} />

         
        ))}
    </div>
  );
};

export default Products;
