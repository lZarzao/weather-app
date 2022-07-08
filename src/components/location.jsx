import React from 'react';
import PropTypes from 'prop-types';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { localTime } from '../services/weather.service';

function Location({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="location-info">
      <div className="date">
        <p>{localTime(dt, timezone)}</p>
      </div>
      <div className="location">
        <UilLocationPoint size={32} className="location-icon" />
        <p>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

Location.propTypes = {
  weather: PropTypes.instanceOf(Object).isRequired
};

export default Location;
