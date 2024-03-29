import { useState, useEffect } from "react";
import { FormSection } from "./components/FormSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import localforage from 'localforage';

const App = () => {
  const [quantity, setQuantity] = useState(0);

  const [product, setProduct] = useState([]);

  const [orderBy, setOrderBy] = useState("newest");

  useEffect(() => {
     localforage.setItem('guardaCoisas', product)
     .catch((error) => alert(error.message))
  }, [product]);

  useEffect(() => {
    localforage.getItem('guardaCoisas')
    .then((value) => {
      if(value) {
        setProduct(value);
      }
    })
    .catch((error) => alert(error.message));
  }, []);

  const handleClickDelete = (id) =>
    setProduct((prev) => prev.filter((item) => item.id !== id));

  const handleClickCheck = (id) =>
    setProduct((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stored: !item.stored } : item,
      ),
    );

  const handleClearClick = () => setProduct([]);

  const handleSubmit = (newPRoduct) =>
    setProduct((prev) => [...prev, newPRoduct]);

  const handleChangeOrder = (e) => setOrderBy(e.target.value);

  const sortedItems =
    orderBy === "stored" ? product.filter((item) => item.stored) : product;

  return (
    <>
      <Header />
      <FormSection onHandleSubmit={handleSubmit} />
      <Section
        product={product}
        quantity={quantity}
        orderBy={orderBy}
        handleClickDelete={handleClickDelete}
        handleClickCheck={handleClickCheck}
        handleClearClick={handleClearClick}
        handleChangeOrder={handleChangeOrder}
        sortedItems={sortedItems}
      />
      <Footer product={product} handleChangeOrder={handleChangeOrder} />
    </>
  );
};

export { App };
