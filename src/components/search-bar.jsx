import React from "react";
import { UilSearch } from '@iconscout/react-unicons';

function SearchBar() {

    return (
    <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..."/>
          <UilSearch size={30} className="search-icon" />
          <div className="weather-unit">
            <button name="celcius">°C</button>
            <p>|</p>
            <button name="farenheit">°F</button>
          </div>
    </div>
    )
}

export default SearchBar;