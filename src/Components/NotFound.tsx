const NotFound = () => {
  return (
    <div className="container mainContainer">
      <h1 className="title">Erro: 404</h1>
      <p style={{ marginBottom: "5rem" }}>Página não encontratada.</p>
      <button style={{ color: "var(--color-p)" }}>
        Voltar para página de checkout.
      </button>
    </div>
  );
};

export default NotFound;
