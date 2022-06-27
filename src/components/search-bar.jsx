import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function SearchBar({setQuery, units, setUnits}) {

  const [city, setCity] = useState("")

  const handleSearchClick = (id) => {
    if (city !== "") setQuery({q: city})
    changeSelector(id)
  }

  const handleLocationClick = (id) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({ lat, lon})
        changeSelector(id)
      })
    }
  }

  const changeSelector = (id) => {
    let element = document.getElementById(id);
    let belement = document.getElementsByClassName("selected")[0];
    belement && belement.classList.remove("selected")
    element.classList.add("selected")
  }

    return (
    <div className="search-box">
          <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" className="search-bar" placeholder="search..."/>
          <UilSearch id="search-icon" size={24} className="search-icon" onClick={() => handleSearchClick("search-icon")}/>
          <UilLocationPoint id="point-icon" size={24} className="search-icon" onClick={() => handleLocationClick("point-icon")} />
          <div className="weather-unit">
            <button id="celcius" name="celcius" className="selected-unit">°C</button>
            <p>|</p>
            <button id="farenheit" name="farenheit">°F</button>
          </div>
    </div>
    )
}

export default SearchBar;