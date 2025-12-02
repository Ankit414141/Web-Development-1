import logo from './logo.svg';
import './App.css';

// App.js
import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>ICC T20 World Cup 2026 (Men's)</h1>
      <h3 style={{ textAlign: "center" }}>Sample Match Schedule</h3>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Match No.</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Team A</th>
            <th>Team B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>10 June 2026</td>
            <td>07:30 PM</td>
            <td>Melbourne</td>
            <td>India</td>
            <td>Australia</td>
          </tr>
          <tr>
            <td>2</td>
            <td>11 June 2026</td>
            <td>03:30 PM</td>
            <td>Sydney</td>
            <td>England</td>
            <td>New Zealand</td>
          </tr>
          <tr>
            <td>3</td>
            <td>12 June 2026</td>
            <td>07:30 PM</td>
            <td>Adelaide</td>
            <td>Pakistan</td>
            <td>South Africa</td>
          </tr>
          <tr>
            <td>4</td>
            <td>13 June 2026</td>
            <td>03:30 PM</td>
            <td>Perth</td>
            <td>Sri Lanka</td>
            <td>Bangladesh</td>
          </tr>
          <tr>
            <td>5</td>
            <td>14 June 2026</td>
            <td>07:30 PM</td>
            <td>Brisbane</td>
            <td>West Indies</td>
            <td>Afghanistan</td>
          </tr>
          <tr>
            <td>6</td>
            <td>15 June 2026</td>
            <td>03:30 PM</td>
            <td>Hobart</td>
            <td>Ireland</td>
            <td>Netherlands</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "gray" }}>
        </p>
    </div>
  );
}

export default App;


