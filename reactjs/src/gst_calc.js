import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState(5);
  const [taxType, setTaxType] = useState("exclusive");
  const [gstAmount, setGstAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const calculateGST = (e) => {
    e.preventDefault();

    let gst = 0;
    let total = 0;

    if (taxType === "exclusive") {
      gst = (amount * gstRate) / 100;
      total = parseFloat(amount) + gst;
    } else {
      gst = amount - amount / (1 + gstRate / 100);
      total = amount;
    }

    setGstAmount(gst.toFixed(2));
    setFinalAmount(total.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h4>GST Calculator</h4>
            </div>

            <div className="card-body">
              <form onSubmit={calculateGST}>

                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">GST Rate</label>
                  <select
                    className="form-control"
                    value={gstRate}
                    onChange={(e) => setGstRate(e.target.value)}
                  >
                    <option value="5">5%</option>
                    <option value="18">18%</option>
                    <option value="40">40%</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Tax Type</label><br />

                  <input
                    type="radio"
                    name="taxType"
                    value="exclusive"
                    checked={taxType === "exclusive"}
                    onChange={(e) => setTaxType(e.target.value)}
                  /> Exclusive &nbsp;

                  <input
                    type="radio"
                    name="taxType"
                    value="inclusive"
                    checked={taxType === "inclusive"}
                    onChange={(e) => setTaxType(e.target.value)}
                  /> Inclusive
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary">
                    Calculate GST
                  </button>
                </div>

              </form>

              <hr />

              <h5>GST Amount: ₹ {gstAmount}</h5>
              <h5>Final Amount: ₹ {finalAmount}</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GSTCalculator />);
