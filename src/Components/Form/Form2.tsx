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
  // const [isCheckout, setIsCheckout] = React.useState(true);
  const path = location.pathname.slice(-1);
  const navigate = useNavigate();

  const validationFormByStep = [
    validationStep1,
    validationStep2,
    validationStep3,
  ];

  function validationStep1() {
    console.log(step);
    setStep((st) => (st < 3 ? st + 1 : st));
    // setStep((st) => (st > 1 ? st - 1 : st));
    console.log(navigate(`/${step > 1 ? step - 1 : step}`));
  }

  function validationStep2() {
    console.log("validation step 2 one is here");
  }

  function validationStep3() {
    console.log("validation step 3 one is here");
  }

  React.useEffect(() => {
    if (path === "/") navigate("/1");
    // if (!validationFormByStep[+path - 1]) setIsCheckout(false);
  }, [path, navigate]);

  // function handleIsCheckout() {
  //   setIsCheckout(true);
  // }

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
          // onClick={validationFormByStep[+path - 1]}
          onClick={() => setStep((st) => (st > 1 ? st - 1 : st))}
          className={styles.Btn}
          to={`/${step > 1 ? step - 1 : step}`}
        >
          Voltar
        </Link>
        {path == "3" ? (
          <input
            className={styles.Btn}
            type="submit"
            value="Finalizar compra!"
          />
        ) : (
          <Link
            // onClick={validationFormByStep[+path - 1]}
            onClick={() => setStep((st) => (st < 3 ? st + 1 : st))}
            className={styles.Btn}
            to={`/${step < 3 ? step + 1 : step}`}
          >
            Próximo
          </Link>
        )}
      </div>
    </section>
  );
};

export default Form;
