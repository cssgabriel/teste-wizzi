// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "./Components/NotFound";
import Form from "./Components/Form/Form";
import "./App.css";
import Description from "./Components/Description";

function App() {
  return (
    <main>
      <Description />
      <Form />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/1" element={<h1>Step1</h1>} />
          <Route path="/2" element={<h1>Step2</h1>} />
          <Route path="/3" element={<h1>Step3</h1>} />
          <Route path="/4" element={<h1>Step4</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </main>
  );
}

export default App;
