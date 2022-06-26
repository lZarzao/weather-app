import React from "react";
import { UilSearch } from '@iconscout/react-unicons';

function Forecast() {

    return (
    <div className="forecast">
        <div className="forecast-title">
            <p>Forecast day</p>
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