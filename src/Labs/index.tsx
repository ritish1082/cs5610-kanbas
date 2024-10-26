import { Routes, Route } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";
import store from "./store";
import { Provider } from "react-redux";


export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Sai Ritish Reddy Musku</h1>
        <p>Section 3</p>
        <p>CRN: 20596</p>
        <p id="wd-github">
          Github code for CS 5610 <a href="https://github.com/ritish1082/cs5610-kanbas"> here</a>
        </p>
        <h2>Labs</h2>
        <TOC />
        <Routes>
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}
