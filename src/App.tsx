import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Bem vindo!</h1>} />
        <Route path="/1" element={<h1>Step1</h1>} />
        <Route path="/2" element={<h1>Step2</h1>} />
        <Route path="/3" element={<h1>Step3</h1>} />
        <Route path="/4" element={<h1>Step4</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
