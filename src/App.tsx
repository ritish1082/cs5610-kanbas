import Labs from "./Labs";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="labs" />} />
        <Route path="/labs/*" element={<Labs />} />
      </Routes>
    </BrowserRouter>
  );
}
