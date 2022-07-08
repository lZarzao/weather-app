import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function SearchBar({ setQuery, units, setUnits }) {
  const [city, setCity] = useState('');

  // change the selected class
  const changeSelector = (id, classname) => {
    const element = document.getElementById(id);
    const belement = document.getElementsByClassName(classname)[0];
    if(belement)
      belement.classList.remove(classname);
    element.classList.add(classname);
  };

  // set the query when you click the search-icon
  const handleSearchClick = (id) => {
    if (city !== '') setQuery({ q: city });
    changeSelector(id, 'selected');
  };

  // set the query when you click de locationPoint-icon
  const handleLocationClick = (id) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setQuery({ lat, lon });
        changeSelector(id, 'selected');
      });
    }
  };

  // set the units (metric|imperial) when you click the C/F buttons
  const handleUnitsCF = (e) => {
    const selected = e.currentTarget.name;
    if (units !== selected) {
      changeSelector(selected, 'selected-unit');
      setUnits(selected);
    }
  };

  return (
    <form className="search-box">
      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text"
        className="search-bar"
        placeholder="search..."
      />
      <UilSearch
        id="search-icon"
        size={24}
        className="search-icon"
        onClick={() => handleSearchClick('search-icon')}
      />

      <UilLocationPoint
        id="point-icon"
        size={24}
        className="search-icon"
        onClick={() => handleLocationClick('point-icon')}
      />
      <aside className="weather-unit">
        <button
          id="metric"
          type="button"
          name="metric"
          className="selected-unit"
          onClick={handleUnitsCF}
        >
          °C
        </button>
        <p>|</p>
        <button 
          id="imperial"
          type="button"
          name="imperial"
          onClick={handleUnitsCF}
        >
          °F
        </button>
      </aside>
    </form>
  );
}

SearchBar.propTypes = {
  setQuery: PropTypes.instanceOf(Object).isRequired,
  units: PropTypes.string.isRequired,
  setUnits: PropTypes.func.isRequired
};

export default SearchBar;
