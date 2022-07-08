import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ setQuery }) {
  const alerta = (id, name) => {
    setQuery(name);
    const element = document.getElementById(id);
    const belement = document.getElementsByClassName('selected')[0];
    if(belement)
        belement.classList.remove('selected');
    element.classList.add('selected');
  };

  // preset cities

  const cities = [
    {
      id: 1,
      name: 'Asunción'
    },
    {
      id: 2,
      name: 'Buenos Aires'
    },
    {
      id: 3,
      name: 'Madrid'
    },
    {
      id: 4,
      name: 'Mexico City'
    },
    {
      id: 5,
      name: 'New York'
    }
  ];

  return (
    <nav className="nav-bar">
      {cities.map((city) => (
        <button
          key={city.id}
          type="button"
          id={city.id}
          className="cities-button"
          onClick={() => alerta(city.id, { q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  setQuery: PropTypes.instanceOf(Object).isRequired
};

export default NavBar;
