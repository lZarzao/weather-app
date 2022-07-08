import React, { useEffect, useState } from 'react';
import NavBar from './components/Nav-bar';
import SearchBar from './components/Search-bar';
import Location from './components/Location';
import WeatherDetails from './components/Weather-details';
import Forecast from './components/Forecast';
import getFullWeatherData, { localTime } from './services/weather.service';

function App() {
  const [query, setQuery] = useState({ q: 'asuncion' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFullWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // Set the bg depending of the time and the tempeture
  const bg = () => {
    if (!weather) return 'app app-background-color-cold';

    const set = parseInt(localTime(weather.sunset, weather.timezone, 'HH'), 10);
    const rise = parseInt(
      localTime(weather.sunrise, weather.timezone, 'HH'),
      10
    );
    const current = parseInt(localTime(weather.dt, weather.timezone, 'HH'), 10);

    if (current > set || current < rise)
      return 'app app-background-color-night';

    const warm = units === 'metric' ? 23 : 75;
    if (weather.temp < warm) {
      return 'app app-background-color-cold';
    }
    return 'app app-background-color-warm';
  };

  return (
    <div className={bg()}>
      <main>
        <NavBar setQuery={setQuery} />
        <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <article>
            <Location weather={weather} />
            <WeatherDetails weather={weather} units={units} />
            <Forecast title="Daily Forecast" items={weather.daily} />
          </article>
        )}
      </main>
    </div>
  );
}

export default App;
