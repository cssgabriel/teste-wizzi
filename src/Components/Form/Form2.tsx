import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";
import styles from "./Form.module.css";
import React from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

declare global {
  interface PropsInput {
    label: string;
    type: string;
    id?: string;
    name: string;
    [key: string]: unknown;
  }
}
const Form = () => {
  const [step, setStep] = React.useState(1);
  const path = location.pathname.slice(-1);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (path === "/") navigate("/1");
  }, [path, navigate]);

  return (
    <section className={styles.ContainerForm}>
      <h2>Passo {step} de 3.</h2>
      <form
        className={styles.FormCheckout}
        onSubmit={(e) => e.preventDefault()}
      >
        <Routes>
          <Route path="1" element={<Step1 />} />
          <Route path="2" element={<Step2 />} />
          <Route path="3" element={<Step3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* {step == 3 ? <Button value="Finalizar Compra" /> : null} */}
        {/* <Button value={step < 3 ? "" : ""} /> */}
      </form>
      <div className={styles.ContainerBtn}>
        <Link
          onClick={() => setStep((st) => (st > 1 ? st - 1 : st))}
          className={styles.Btn}
          to={`/${step > 1 ? step - 1 : step}`}
        >
          Voltar
        </Link>
        <Link
          onClick={() => setStep((st) => (st < 3 ? st + 1 : st))}
          className={styles.Btn}
          to={`/${step < 3 ? step + 1 : step}`}
        >
          Próximo
        </Link>
      </div>
    </section>
  );
};

export default Form;
