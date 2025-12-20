import React from "react";
import ReactDOM from "react-dom/client";

class EMICalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
            rate: 0,
            year: 0,
            emi: 0
        };
    }

    updateAmount = (event) => {
        this.setState({ amount: event.target.value });
    };

    updateRate = (event) => {
        this.setState({ rate: event.target.value });
    };

    updateYear = (event) => {
        this.setState({ year: event.target.value });
    };

    calculateEMI = (event) => {
        event.preventDefault();

        let P = this.state.amount;
        let R = this.state.rate / 12 / 100; // monthly interest
        let N = this.state.year * 12;       // total months

        if (P === 0 || R === 0 || N === 0) {
            alert("Please enter all values");
            return;
        }

        let emi =
            (P * R * Math.pow(1 + R, N)) /
            (Math.pow(1 + R, N) - 1);

        this.setState({
            emi: emi.toFixed(2)
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card shadow">
                            <div className="card-header">
                                <h3>EMI Calculator</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={this.calculateEMI}>

                                    <div className="mb-3">
                                        <label className="form-label">Loan Amount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={this.updateAmount}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Interest Rate (%)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={this.updateRate}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Tenure (Years)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={this.updateYear}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Calculate EMI"
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <h3>Monthly EMI: ₹ {this.state.emi}</h3>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EMICalculator />);
