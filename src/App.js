import NavBar from './components/nav-bar';
import SearchBar from './components/search-bar';
import Location from './components/location';
import WeatherDetails from './components/weather-details';
import Forecast from './components/Forecast';

const api = {
  key: "2abd254968449e3f2aca30a513bc1f53",
  base: "https://api.openweathermap.org/data/3.0"
}

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <SearchBar />
        <Location />
        <WeatherDetails />
        <Forecast />
      </main>
    </div>
  );
}

export default App;
