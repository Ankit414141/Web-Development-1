import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    // refs
    this.amount = React.createRef();
    this.fromCurrency = React.createRef();
    this.toCurrency = React.createRef();

    this.state = {
      result: ''
    };
  }

  rates = {
    Rupees: 1,
    Dollar: 83,
    Pound: 104,
    Euro: 90,
    Yen: 0.56
  };

  convertCurrency = (event) => {
    event.preventDefault();

    const amount = this.amount.current.value;
    const from = this.fromCurrency.current.value;
    const to = this.toCurrency.current.value;

    const amountInINR = amount * this.rates[from];
    const converted = amountInINR / this.rates[to];

    this.setState({
      result: converted.toFixed(2)
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="card shadow">
              <div className="card-header bg-success text-white text-center">
                <h4>Currency Converter</h4>
              </div>

              <div className="card-body">
                <form onSubmit={this.convertCurrency}>

                  <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter amount"
                      ref={this.amount}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">From Currency</label>
                    <select className="form-control" ref={this.fromCurrency}>
                      <option>Rupees</option>
                      <option>Dollar</option>
                      <option>Pound</option>
                      <option>Euro</option>
                      <option>Yen</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">To Currency</label>
                    <select className="form-control" ref={this.toCurrency}>
                      <option>Rupees</option>
                      <option>Dollar</option>
                      <option>Pound</option>
                      <option>Euro</option>
                      <option>Yen</option>
                    </select>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-success">
                      Convert
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <h5>
                      Converted Amount :
                      <span className="text-success ms-2">
                        {this.state.result}
                      </span>
                    </h5>
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

root.render(<CurrencyConverter />);
