import NavBar from './components/nav-bar';
import SearchBar from './components/search-bar';
import Location from './components/location';
import WeatherDetails from './components/weather-details';
import Forecast from './components/Forecast';
import getFullWeatherData from './services/weather.service';

function App() {

  const fetchWeather = async() => {
    const data = await getFullWeatherData({q: 'asuncion'})
    console.log(data)
  }

  fetchWeather()

  return (
    <div className="app">
      <main>
        <NavBar />
        <SearchBar />
        <Location />
        <WeatherDetails />
        <Forecast title="Daily Forecast"/>
      </main>
    </div>
  );
}

export default App;
