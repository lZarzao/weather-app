import React from "react";

function NavBar() {

    const cities = [
        {
            id: 1,
            name: "Asunción"
        },
        {
            id: 2,
            name: "Buenos Aires"
        },
        {
            id: 3,
            name: "Madrid"
        },
        {
            id: 4,
            name: "Mexico City"
        },
        {
            id: 5,
            name: "New York"
        }
    ]

    return (
    <div className="nav-bar">
        {cities.map((city) => (
            <button key={city.id} className="cities-button">{city.name}</button>
        ))}
    </div>
    )
}

export default NavBar;