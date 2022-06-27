import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function SearchBar({setQuery, units, setUnits}) {

  const [city, setCity] = useState("")

  // set the query when you click the search-icon
  const handleSearchClick = (id) => {
    if (city !== "") setQuery({q: city})
    changeSelector(id, "selected")
  }

  // set the query when you click de locationPoint-icon
  const handleLocationClick = (id) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({ lat, lon})
        changeSelector(id, "selected")
      })
    }
  }

  // set the units (metric|imperial) when you click the C/F buttons
  const handleUnitsCF = (e) => {
    const selected = e.currentTarget.name
    if(units !== selected) {
      changeSelector(selected, "selected-unit")
      setUnits(selected)
    }
  }

  // change the selected class
  const changeSelector = (id, classname) => {
    let element = document.getElementById(id);
    let belement = document.getElementsByClassName(classname)[0];
    belement && belement.classList.remove(classname)
    element.classList.add(classname)
  }

    return (
    <div className="search-box">
      <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" className="search-bar" placeholder="search..."/>
      <UilSearch id="search-icon" size={24} className="search-icon" onClick={() => handleSearchClick("search-icon")}/>

      <UilLocationPoint id="point-icon" size={24} className="search-icon" onClick={() => handleLocationClick("point-icon")} />
      <div className="weather-unit">
        <button id="metric" name="metric" className="selected-unit" onClick={handleUnitsCF}>°C</button>
        <p>|</p>
        <button id="imperial" name="imperial" onClick={handleUnitsCF}>°F</button>
      </div>
    </div>
    )
}

export default SearchBar;