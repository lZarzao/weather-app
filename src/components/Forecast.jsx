import React from "react";
import { iconUrl } from "../services/weather.service";

function Forecast( {title, items} ) {

    return (
    <div className="forecast">
        <div className="forecast-title">
            <p>{title}</p>
        </div>
        <hr />
        <div className="forecast-container">
            {items.map(item => (
                <div className="forecast-box">
                    <p>{item.title}</p>
                    <img src={iconUrl(item.icon)} alt="weather img" />
                    <p>{`${item.temp.toFixed()}°`}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Forecast;