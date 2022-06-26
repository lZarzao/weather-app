import React from "react";

function Forecast( {title} ) {

    return (
    <div className="forecast">
        <div className="forecast-title">
            <p>{title}</p>
        </div>
        <hr />
        <div className="forecast-container">
            <div className="forecat-box">
                <p>Monday</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg" alt="weather img" />
                <p>30°</p>
            </div>
            <div className="forecat-box">
                <p>Monday</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg" alt="weather img" />
                <p>30°</p>
            </div>
            <div className="forecat-box">
                <p>Monday</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg" alt="weather img" />
                <p>30°</p>
            </div>
            <div className="forecat-box">
                <p>Monday</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg" alt="weather img" />
                <p>30°</p>
            </div>
            <div className="forecat-box">
                <p>Monday</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg" alt="weather img" />
                <p>30°</p>
            </div>
        </div>
    </div>
    )
}

export default Forecast;