import { useState } from "react";

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

export { FormSection };
