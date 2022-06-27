import React from "react";
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons';
import { iconUrl, localTime } from "../services/weather.service";

function WeatherDetails({weather: {
    temp, feels_like, temp_min, temp_max, humidity, sunrise, sunset, speed, detail, icon, timezone
}}) {

    return (
    <div className="weather-details">
        <div className="temp">
            <p>{`${temp.toFixed()}°`}</p>
            <img src={iconUrl(icon)} alt="weather img" />
        </div>
        <div className="info">
            <p className="info-weather">{detail}</p>
            <div className="info-container">
                <div className="info-box">
                    <div className="info-flex">
                        <UilArrowUp size={20} className="icon" />
                        <p>Hight: {`${temp_max.toFixed()}°`}</p>
                    </div>
                    <div className="info-flex">
                        <UilArrowDown size={20} className="icon" />
                        <p>Low: {`${temp_min.toFixed()}°`}</p>
                    </div>
                    <div className="info-flex">
                        <UilSun size={20} className="icon" />
                        <p>Sunrise: {localTime(sunrise, timezone, "hh:mm a")}</p>
                    </div>
                    <div className="info-flex">
                        <UilSunset size={20} className="icon" />
                        <p>Sunset: {localTime(sunset, timezone, "hh:mm a")}</p>
                    </div>
                </div>
                <div className="info-box">
                    <div className="info-flex">
                        <UilTemperature size={20} className="icon" />
                        <p>Fells like: {`${feels_like.toFixed()}°`}</p>
                    </div>
                    <div className="info-flex">
                        <UilTear size={20} className="icon" />
                        <p>Humidity: {`${humidity.toFixed()}%`}</p>
                    </div>
                    <div className="info-flex">
                        <UilWind size={20} className="icon" />
                        <p>Wind speed: {`${speed.toFixed()} m/s`}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WeatherDetails;