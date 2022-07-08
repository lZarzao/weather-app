/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset
} from '@iconscout/react-unicons';
import { iconUrl, localTime } from '../services/weather.service';

function WeatherDetails({
  weather: {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    sunrise,
    sunset,
    speed,
    detail,
    icon,
    timezone
  },
  units
}) {

    return (
      <section className="weather-details">
        <header className="temp">
          <p>{`${temp.toFixed()}°`}</p>
          <img src={iconUrl(icon)} alt="weather img" />
        </header>
        <section className="info">
          <p className="info-weather">{detail}</p>
          <div className="info-container">
            <ul className="info-box">
              <li className="info-flex">
                <UilArrowUp size={20} className="icon" />
                <p>High: {`${temp_max.toFixed()}°`}</p>
              </li>
              <li className="info-flex">
                <UilArrowDown size={20} className="icon" />
                <p>Low: {`${temp_min.toFixed()}°`}</p>
              </li>
              <li className="info-flex">
                <UilSun size={20} className="icon" />
                <p>Sunrise: {localTime(sunrise, timezone, 'hh:mm a')}</p>
              </li>
              <li className="info-flex">
                <UilSunset size={20} className="icon" />
                <p>Sunset: {localTime(sunset, timezone, 'hh:mm a')}</p>
              </li>
            </ul>
            <ul className="info-box">
              <li className="info-flex">
                <UilTemperature size={20} className="icon" />
                <p>Feels like: {`${feels_like.toFixed()}°`}</p>
              </li>
              <li className="info-flex">
                <UilTear size={20} className="icon" />
                <p>Humidity: {`${humidity.toFixed()}%`}</p>
              </li>
              <li className="info-flex">
                <UilWind size={20} className="icon" />
                <p>
                  Wind speed:{' '}
                  {`${speed.toFixed()} ${units === 'metric' ? 'm/s' : 'mph'}`}
                </p>
              </li>
            </ul>
          </div>
        </section>
      </section>
    );
}

WeatherDetails.propTypes = {
  weather: PropTypes.instanceOf(Object).isRequired,
  units: PropTypes.string.isRequired
};

export default WeatherDetails;
