import React from "react";
import BaskerSidebar from "../../components/BasketSidebar";
import Products from "../../components/Products";
import useLocaleStorage from "../../hooks/useLocaleStorage";
import "./index.scss";
const Shop = () => {
  const [basket, setBasket] = useLocaleStorage("basket");
  const addToBasket = (product) => {
    console.log(product);
    const findProduct = basket.find((item) => item.id === product.id);
    if (findProduct) {
      findProduct.count++;
      setBasket([...basket]);
      return;
    }
    setBasket([...basket, { ...product, count: 1 }]);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const handleInc = (id) => {
    const findProductPrice = basket.find((x) => x.id === id);
    if (findProductPrice) {
      findProductPrice.count++;
      setBasket([...basket]);
    }
  };

  const handleDec = (id) => {
    const findProductPrice = basket.find((x) => x.id === id);
    if (findProductPrice) {
      findProductPrice.count--;
      if (findProductPrice.count === 0) {
        setBasket(basket.filter((item) => item.id !== id));
        return;
      }
      setBasket([...basket]);
    }
  };

  const sum = basket
    .reduce((acc, x) => acc + x.count * x.price, 0)
    .toFixed(2);

    
  return (
    <>
      <section id="shop">
        <Products addToBasket={addToBasket} />
      </section>
      <section>
        <BaskerSidebar
            props={{sum,handleInc,handleDec,removeFromBasket,basket}}
        />
      </section>
    </>
  );
};

export default Shop;
