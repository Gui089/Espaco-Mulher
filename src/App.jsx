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
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <input type="text" placeholder="Manda aqui" />

      <button className="btn-add">Adicionar</button>
    </form>
  </div>
);

const Section = () => (
  <div className="section">
    <div className="options-order">
      <select name="" id="">
        <option value="Mais recents">Ordenar mais recentes</option>
        <option value="Alfabeti">Ordem alfabética</option>
      </select>

      <button className="btn-clear">Limpar lista</button>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer-section">
    <h3>Você tem 0 items na lista</h3>
  </div>
);

const App = () => {
  return (
    <>
      <Header />
      <FormSection />
      <Section />
      <Footer />
    </>
  );
};

export { App };
