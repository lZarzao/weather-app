import React from "react";
import { UilLocationPoint } from '@iconscout/react-unicons';

function Location() {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
        }

    return (
    <div className="location-info">
        <div className="date">
            <p>{dateBuilder(new Date())}</p>
            <p className="separator">-</p>
            <p>Local time: 06:00</p>
        </div>
        <div className="location">
            <UilLocationPoint size={32} className="location-icon" />
            <p>Asunción, PY</p>
        </div>
    </div>
    )
}

export default Location;