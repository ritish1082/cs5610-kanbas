import { Routes, Route } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
    <div>
      <h1>Sai Ritish Reddy Musku</h1>

      <p>Section - 3</p>
      <p>CRN - 20596</p>
      <Link id="wd-github" to="https://github.com/ritish1082">
          GitHub
      </Link>
      <br />
      <br />
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3/>} />
        <Route path="Lab4" element={<Lab4/>} />
        <Route path="Lab5" element={<Lab5 />} />
      </Routes>
    </div>
    </Provider>
  );
}