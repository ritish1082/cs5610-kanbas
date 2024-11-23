import React from "react";

function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#/Labs/Lab1">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/Labs/Lab1">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/Labs/Lab1">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#/Labs/Lab1">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      ;
    </div>
  );
}

export default BootstrapNavigation;