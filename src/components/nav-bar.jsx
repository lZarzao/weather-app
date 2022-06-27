import React from "react";

function NavBar({setQuery}) {

    const alerta = (id, name) => {
        setQuery(name)
        let element = document.getElementById(id);
        let belement = document.getElementsByClassName("selected")[0];
        belement && belement.classList.remove("selected")
        element.classList.add("selected")
    }

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
            <button key={city.id} id={city.id} className="cities-button" onClick={() => alerta(city.id, {q: city.name })}>{city.name}</button>
        ))}
    </div>
    )
}

export default NavBar;