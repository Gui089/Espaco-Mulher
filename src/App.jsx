import { useState } from "react";

const Header = () => (
  <header className="header">
    <img className="logo" src="../images/logo-espaco-mulher.png" alt="logo" />
    <h1>Espaço Mulher</h1>
  </header>
);

const FormSection = ({ hadnleSubmit }) => {
  return (
    <div className="section-form">
      <h3>O que você precisa guardar ? </h3>

      <form onSubmit={hadnleSubmit} className="form-add">
        <select name="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <input name="product" type="text" placeholder="Manda aqui" />

        <button className="btn-add">Adicionar</button>
      </form>
    </div>
  );
};

const Section = ({ quantity, product, renderList, renderCheck, isChecked }) => {
  return (
    <div className="section">
      {renderList && (
        <ul>
          {product.map((item, index) => (
            <li key={index}>
              <input onClick={renderCheck} type="checkbox" />
              {isChecked === false ? (
                item.quantity + item.product
              ) : (
                <del>
                  {" "}
                  {item.quantity} {item.product}
                </del>
              )}
              <button className="x-btn">x</button>
            </li>
          ))}
        </ul>
      )}
      <div className="options-order">
        <select name="" id="">
          <option value="Mais recents">Ordenar mais recentes</option>
          <option value="Alfabeti">Ordem alfabética</option>
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

  const hadnleSubmit = (e) => {
    e.preventDefault();
    const { quantity, product } = e.target.elements;

    setProduct((prevProducts) => [
      ...prevProducts,
      { quantity: quantity.value, product: product.value },
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
      />
      <Footer quantity={quantity} />
    </>
  );
};

export { App };
