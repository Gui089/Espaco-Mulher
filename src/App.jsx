import { useState } from "react";

const Header = () => (
  <header className="header">
    <img
      className="logo"
      src="https://github.com/Gui089/Espaco-Mulher/blob/main/images/logo-espaco-mulher.png?raw=true"
      alt="logo"
    />
    <h1>Espaço Mulher</h1>
  </header>
);

const ids = Array.from({ length: 20 }, () => crypto.randomUUID());

const FormSection = ({ onHandleSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => setInputValue(e.target.value);

  const hadnleSubmit = (e) => {
    e.preventDefault();

    const { quantity } = e.target.elements;
    onHandleSubmit({
      id: crypto.randomUUID(),
      quantity: quantity.value,
      name: inputValue,
      stored: false,
    });

    setInputValue("");
  };

  return (
    <div className="section-form">
      <h3>O que você precisa guardar ? </h3>

      <form onSubmit={hadnleSubmit} className="form-add">
        <select name="quantity">
          {ids.map((id, index) => (
            <option key={id} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

        <input
          value={inputValue}
          onChange={handleChangeInput}
          type="text"
          placeholder="Manda aqui"
          autoFocus
        />

        <button className="btn-add">Adicionar</button>
      </form>
    </div>
  );
};

const Section = ({
  handleClickDelete,
  handleClickCheck,
  handleClearClick,
  orderBy,
  handleChangeOrder,
  sortedItems,
}) => {
  return (
    <div className="section">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.stored}
              onChange={() => handleClickCheck(item.id)}
              className="check-input"
            />
            {item.stored ? (
              <del>
                {item.quantity} {item.name}
              </del>
            ) : (
              item.quantity + item.name
            )}
            <button
              onClick={() => handleClickDelete(item.id)}
              className="x-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div className="options-order">
        <select value={orderBy} onChange={handleChangeOrder}>
          <option value="newest">Ordenar mais recentes</option>
          <option value="stored">Mostrar Guardados</option>
        </select>
        <button onClick={handleClearClick} className="btn-clear">
          Limpar lista
        </button>
      </div>
    </div>
  );
};

const Footer = ({ product }) => (
  <div className="footer-section">
    <h3>Você tem {product.length} items na lista</h3>
  </div>
);

const App = () => {
  const [quantity, setQuantity] = useState(0);

  const [product, setProduct] = useState([]);

  const [orderBy, setOrderBy] = useState("newest");

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
