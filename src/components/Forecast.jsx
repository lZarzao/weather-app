import React from 'react';
import PropTypes from 'prop-types';
import { iconUrl } from '../services/weather.service';

function Forecast({ title, items }) {
  return (
    <ul className="forecast">
      <li className="forecast-title">
        <p>{title}</p>
      </li>
      <hr />
      <li className="forecast-container">
        {items.map((item) => (
          <div className="forecast-box" key={item.title}>
            <p>{item.title}</p>
            <img src={iconUrl(item.icon)} alt="weather img" />
            <div className="forecast-box-temp">
              <p>{`${item.temp_min.toFixed()}°`}</p>
              <p>|</p>
              <p>{`${item.temp_max.toFixed()}°`}</p>
            </div>
          </div>
        ))}
      </li>
    </ul>
  );
}

Forecast.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired
};

export default Forecast;
