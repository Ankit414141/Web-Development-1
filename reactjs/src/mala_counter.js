import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function MalaCounter() {
  const [manaka, setManaka] = useState(0);
  const [mala, setMala] = useState(0);

  const increase = () => {
    if (manaka + 1 === 108) {
      setManaka(0);
      setMala(mala + 1);
    } else {
      setManaka(manaka + 1);
    }
  };

  const reset = () => {
    setManaka(0);
    setMala(0);
  };

  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 text-center" style={{ width: "320px" }}>
        <h3 className="mb-3">Mala Counter</h3>

        <h5 className="mb-2">Manaka</h5>
        <h1 className="text-primary mb-3">{manaka} / 108</h1>

        <h5 className="mb-2">Mala</h5>
        <h2 className="text-success mb-4">{mala}</h2>

        <button className="btn btn-success w-100 mb-2" onClick={increase}>
          + Manaka
        </button>

        <button className="btn btn-secondary w-100" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MalaCounter />);
