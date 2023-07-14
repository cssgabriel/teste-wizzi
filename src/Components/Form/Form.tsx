// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "../NotFound";
import "./Form.css";
import React from "react";
import Button from "./Button";

const Form = () => {
  const [step, setStep] = React.useState(1);

  function addDays(date: Date, days: number) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
  }

  const date = new Date();
  const dateMin = addDays(date, 1).toISOString().slice(0, 10);

  return (
    <section style={{ marginLeft: "3rem" }}>
      <h2>Passo {step} de 6.</h2>
      <form className="form__checkout" onSubmit={(e) => e.preventDefault()}>
        <div id="step1">
          <label htmlFor="departure">Data de ida</label>
          <input type="date" min={dateMin} value={dateMin} name="departure" />

          <label htmlFor="back">Data de volta</label>
          <input type="date" name="back" />
        </div>

        <div id="step2">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" />

          <label htmlFor="years">Idade</label>
          <input type="text" name="years" />
        </div>

        <div id="step3">
          <label htmlFor="name">Nome do passageiro responsável</label>
          <input type="text" name="name" />

          <label htmlFor="years">E-mail do passageiro responsável</label>
          <input type="email" name="email" />
        </div>
        <Button value={step < 3 ? "Próximo" : "Finalizar Compra"} />
      </form>
    </section>
  );
};

export default Form;
