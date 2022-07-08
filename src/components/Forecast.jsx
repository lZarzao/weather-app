import React from 'react';
import PropTypes from 'prop-types';
import { iconUrl } from '../services/weather.service';

function Forecast({ title, items }) {
  return (
    <section className="forecast">
      <header className="forecast-title">
        <p>{title}</p>
      </header>
      <hr />
      <ul className="forecast-container">
        {items.map((item) => (
          <li className="forecast-box" key={item.title}>
            <p>{item.title}</p>
            <img src={iconUrl(item.icon)} alt="weather img" />
            <div className="forecast-box-temp">
              <p>{`${item.temp_min.toFixed()}°`}</p>
              <p>|</p>
              <p>{`${item.temp_max.toFixed()}°`}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

Forecast.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired
};

export default Forecast;
