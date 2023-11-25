import { Route, Routes } from "react-router-dom";
import { Navegador } from "../index.js";
import "./App.css";
import { Home, Contacto, NotFound } from "./pages";

function App() {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
