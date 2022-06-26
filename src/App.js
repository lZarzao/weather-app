import NavBar from './components/nav-bar';
import SearchBar from './components/search-bar';
import Location from './components/location'

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
