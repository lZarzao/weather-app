import React from "react";
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons';

function WeatherDetails() {

    return (
    <div className="weather-details">
        <div className="temp">
            <p>26°C</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg" alt="weather img" />
        </div>
        <div className="info">
            <p className="info-weather">Cloudy</p>
            <div className="info-box">
                <div className="info-flex">
                    <UilArrowUp size={20} className="icon" />
                    <p>Hight: <span>10°</span></p>
                </div>
                <div className="info-flex">
                    <UilArrowDown size={20} className="icon" />
                    <p>Low: <span>20°</span></p>
                </div>
                <div className="info-flex">
                    <UilSun size={20} className="icon" />
                    <p>Sunrise: <span>05:30</span></p>
                </div>
                <div className="info-flex">
                    <UilSunset size={20} className="icon" />
                    <p>Sunset: <span>18:30</span></p>
                </div>
            </div>
            <div className="info-box">
                <div className="info-flex">
                    <UilTemperature size={20} className="icon" />
                    <p>Fells like: <span>20°</span></p>
                </div>
                <div className="info-flex">
                    <UilTear size={20} className="icon" />
                    <p>Humidity: <span>70%</span></p>
                </div>
                <div className="info-flex">
                    <UilWind size={20} className="icon" />
                    <p>Wind speed: <span>10 km/h</span></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WeatherDetails;