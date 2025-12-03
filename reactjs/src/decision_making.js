import React from 'react';
import ReactDOM from 'react-dom/client';
import './matrix.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function DigitalClock() {

    let today = new Date();

    // TIME
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM";

    // DATE FORMAT --> Tuesday, 02 December 2025
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let dayName = days[today.getDay()];
    let date = today.getDate().toString().padStart(2, "0");
    let monthName = months[today.getMonth()];
    let year = today.getFullYear();

    let fullDate = `${dayName}, ${date} ${monthName} ${year}`;

    return (
        <>
            <canvas id="matrix" />
            <div className="clock-container">
                <div>
                    <div className="matrix-clock" id="clock">
                        {hour}:{minute}:{seconds} {ampm}
                    </div>
                    <div className="date-text" id="date">
                        {fullDate}
                    </div>
                </div>
            </div>
        </>
    );
}

root.render(<DigitalClock />);
