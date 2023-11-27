import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ProductDetail = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const url = `https://fakestoreapi.com/products/${id}`;
  const fetch = async () => {
    try {
      const res = await axios.get(url);
      const productData = res.data
      setProduct(productData)
    } catch (error) {
      console.log(error);
    } finally {
        setLoading(false)
    }
  };

  useEffect(() => {
    fetch()
  }, [])
  
  console.log(url);

  return (
    <div className="detail">
     {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <p>Item ID: {id}</p>
          <h2>{product.title}</h2>
        </>
      )} 
    </div>
  );
};

export default ProductDetail;
