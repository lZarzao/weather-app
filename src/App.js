import { useEffect, useState } from 'react';
import NavBar from './components/nav-bar';
import SearchBar from './components/search-bar';
import Location from './components/location';
import WeatherDetails from './components/weather-details';
import Forecast from './components/Forecast';
import getFullWeatherData from './services/weather.service';

function App() {

  const [query, setQuery] = useState({ q: 'asuncion' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {

  const fetchWeather = async() => {
    await getFullWeatherData({...query, units})
      .then(data => {
        setWeather(data)
      })
  }

  fetchWeather()

  }, [query, units])

  return (
    <div className="app">
      <main>
        <NavBar />
        <SearchBar />

        {weather && (
          <div>
            <Location weather={weather} />
            <WeatherDetails weather={weather} />
            <Forecast title="Daily Forecast" items={weather.daily} />
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
