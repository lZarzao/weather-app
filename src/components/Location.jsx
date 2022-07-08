import React from 'react';
import PropTypes from 'prop-types';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { localTime } from '../services/weather.service';

function Location({ weather: { dt, timezone, name, country } }) {
  return (
    <aside className="location-info">
      <section className="date">
        <p>{localTime(dt, timezone)}</p>
      </section>
      <section className="location">
        <UilLocationPoint size={32} className="location-icon" />
        <p>{`${name}, ${country}`}</p>
      </section>
    </aside>
  );
}

Location.propTypes = {
  weather: PropTypes.instanceOf(Object).isRequired
};

export default Location;
