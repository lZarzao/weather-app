import UilReact from '@iconscout/react-unicons/icons/uil-react'

const api = {
  key: "2abd254968449e3f2aca30a513bc1f53",
  base: "https://api.openweathermap.org/data/3.0"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."/>
        </div>
      </main>
    </div>
  );
}

export default App;
