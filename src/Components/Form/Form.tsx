import "./Form.css";

const Form = () => {
  return (
    <form className="form__checkout" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" />

      <label htmlFor="years">Idade</label>
      <input type="text" name="years" />

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
