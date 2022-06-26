import UilReact from '@iconscout/react-unicons/icons/uil-react';
import NavBar from './components/nav-bar';

const api = {
  key: "2abd254968449e3f2aca30a513bc1f53",
  base: "https://api.openweathermap.org/data/3.0"
}

const dateBuilder = (d) => {
  console.log(d)
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`
}

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."/>
        </div>
        <div className="location-info">
          <div className="location">
            <p>Asunción, Py</p>
          </div>
          <div className="date">
            <p>{dateBuilder(new Date())}</p>
          </div>
        </div>
        <div className="weather-info">
          <div className="temp">
            <h1>26°C</h1>
          </div>
          <div className="weather">
            cloudy
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
