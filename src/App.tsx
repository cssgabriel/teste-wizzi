import { BrowserRouter } from "react-router-dom";
import Form2 from "./Components/Form/Form2";
import "./App.css";
import Description from "./Components/Description";

function App() {
  return (
    <main>
      <h1>Finalize sua compra!</h1>
      <BrowserRouter>
        <Description />
        <Form2 />
      </BrowserRouter>
    </main>
  );
}

export default App;
