import { useEffect, useState } from 'react';
import NavBar from './components/nav-bar';
import SearchBar from './components/search-bar';
import Location from './components/location';
import WeatherDetails from './components/weather-details';
import Forecast from './components/Forecast';
import getFullWeatherData from './services/weather.service';
import { localTime } from './services/weather.service';

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

  // Set the bg depending of the time and the tempeture
  const bg = () => {
    if(!weather) return "app app-background-color-cold";

    let set = parseInt(localTime(weather.sunset, weather.timezone, "HH"))
    let rise = parseInt(localTime(weather.sunrise, weather.timezone, "HH"))
    let current = parseInt(localTime(weather.dt, weather.timezone, "HH"))
    
    if( current > set || current < rise) return "app app-background-color-night"

    const warm = units === "metric" ? 23 : 75;
    if(weather.temp < warm) {
     return "app app-background-color-cold"
    } else {
      return "app app-background-color-warm"
    }
  }

  return (
    <div className={bg()}>
      <main>
        <NavBar setQuery={setQuery} />
        <SearchBar setQuery={setQuery} units={units} setUnits={setUnits}/>
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
