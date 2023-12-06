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

export { Section };
