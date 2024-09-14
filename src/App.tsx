import React from "react";
import Kanbas from "./Kanbas";
// import "./App.css";
import Labs from "./Labs";
import { HashRouter, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
