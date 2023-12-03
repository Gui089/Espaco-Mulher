const Header = () => (
  <header className="header">
    <img className="logo" src="../images/logo-espaco-mulher.png" alt="logo" />
    <h1>Espaço Mulher</h1>
  </header>
);

const FormSection = () => (
  <div className="section-form">
    <h3>O que você precisa guardar ? </h3>

    <form className="form-add">
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      <input type="text" placeholder="Manda aqui" />

      <button>Adicionar</button>
    </form>
  </div>
);

const App = () => {
  return (
    <>
      <Header />
      <FormSection />
    </>
  );
};

export { App };
