import ReactDOM from 'react-dom/client';
import React from 'react';

class BMICalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,   
            weight: 0,   
            bmi: 0,
            level: ""
        };
    }

    updateHeight = (event) => {
        this.setState({
            height: event.target.value
        });
    }

    updateWeight = (event) => {
        this.setState({
            weight: event.target.value
        });
    }

    calculateBMI = (event) => {
        event.preventDefault(); 

        let h = this.state.height / 100; 
        let w = this.state.weight;

        if (h === 0 || w === 0) {
            alert("Please enter valid height & weight");
            return;
        }

        let bmiValue = (w / (h * h)).toFixed(2);

        let obesity = "";
        if (bmiValue < 18.5) obesity = "Underweight";
        else if (bmiValue >= 18.5 && bmiValue <= 24.9) obesity = "Normal";
        else if (bmiValue >= 25 && bmiValue <= 29.9) obesity = "Overweight";
        else obesity = "Obese";

        this.setState({
            bmi: bmiValue,
            level: obesity
        });
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card shadow">
                            <div className="card-header">
                                <h3>BMI Calculator</h3>
                            </div>

                            <div className="card-body">
                                <form action="" onSubmit={this.calculateBMI}>

                                    <div className='mb-3'>
                                        <label htmlFor="height" className='form-label'>Height (cm)</label>
                                        <input type="text" id='height' className='form-control'
                                            onChange={this.updateHeight} />
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor="weight" className='form-label'>Weight (kg)</label>
                                        <input type="text" id='weight' className='form-control'
                                            onChange={this.updateWeight} />
                                    </div>

                                    <div>
                                        <input type="submit" className='btn btn-primary' value='Calculate BMI' />
                                    </div>

                                    <div className='mt-3'>
                                        <h3>BMI: {this.state.bmi}</h3>
                                        <h3>Obesity Level: {this.state.level}</h3>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BMICalculator />);
