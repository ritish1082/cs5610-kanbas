import React from "react";

export default function BootstrapTables() {
  return (
    <div id="wd-css-styling-tables">
      <h2>Tables</h2>
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th>Quiz</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-warning">
            <td>Q1</td>
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
          <tr className="table-danger">
            <td>Q2</td>
            <td>CSS</td>
            <td>2/10/21</td>
            <td>90</td>
          </tr>
          <tr className="table-primary">
            <td>Q3</td>
            <td>JavaScript</td>
            <td>2/17/21</td>
            <td>90</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="table-success">
            <td colSpan={3}>Average</td>
            <td>90</td>
          </tr>
        </tfoot>
      </table>

      <br />
      <br />

      <div id="wd-css-responsive-tables">
        <h2>Responsive tables</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img src="images/starwars.png" className="card-img-top" alt="boston" />
          <div className="card-body">
            <h5 className="card-title">Star Wars</h5>
            <p className="card-text">May the force be with you!</p>
            <a href="https://www.starwars.com/" className="btn btn-primary">
              Visit Star Wars
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}