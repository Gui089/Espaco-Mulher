import { useState } from "react";

const Header = () => (
  <header className="header">
    <img className="logo" src="../images/logo-espaco-mulher.png" alt="logo" />
    <h1>Espaço Mulher</h1>
  </header>
);

const ids = Array.from({ length: 20 }, () => crypto.randomUUID());

const FormSection = ({ hadnleSubmit }) => {
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

        <input name="product" type="text" placeholder="Manda aqui" />

        <button className="btn-add">Adicionar</button>
      </form>
    </div>
  );
};

const Section = ({
  handleClickDelete,
  product,
  renderList,
  renderCheck,
  isChecked,
}) => {
  return (
    <div className="section">
      {renderList && (
        <ul>
          {product.map((item) => (
            <li key={item.id}>
              <input onClick={renderCheck} type="checkbox" />
              {isChecked === false ? (
                item.quantity + item.name
              ) : (
                <del>
                  {" "}
                  {item.quantity} {item.name}
                </del>
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
      )}
      <div className="options-order">
        <select name="" id="">
          <option value="Mais recents">Ordenar mais recentes</option>
          <option value="Alfabetic">Ordem alfabética</option>
        </select>
        <button className="btn-clear">Limpar lista</button>
      </div>
    </div>
  );
};

const Footer = ({ quantity }) => (
  <div className="footer-section">
    <h3>Você tem {quantity} items na lista</h3>
  </div>
);

const App = () => {
  const [quantity, setQuantity] = useState(0);

  const [product, setProduct] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const renderList = quantity != 0 ? true : false;

  const handleClickDelete = (id) =>
    setProduct((prev) => prev.filter((item) => item.id !== id));

  const hadnleSubmit = (e) => {
    e.preventDefault();
    const { quantity, product } = e.target.elements;

    setProduct((prevProducts) => [
      ...prevProducts,
      {
        id: crypto.randomUUID(),
        quantity: quantity.value,
        name: product.value,
        stored: false,
      },
    ]);

    setQuantity(quantity.value);
  };

  const renderCheck = () => setIsChecked((c) => !c);

  return (
    <>
      <Header />
      <FormSection hadnleSubmit={hadnleSubmit} />
      <Section
        product={product}
        quantity={quantity}
        hadnleSubmit={hadnleSubmit}
        renderList={renderList}
        renderCheck={renderCheck}
        isChecked={isChecked}
        handleClickDelete={handleClickDelete}
      />
      <Footer quantity={quantity} />
    </>
  );
};

export { App };
