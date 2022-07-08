# Weather-app

This is a simple React JS Weather app for learning purposes.

## Description

The main objective of this repo is to put into practice the knowledge that I have acquired in React JS, HTML and CSS.
This app consumes data from the Open Weather Map api.

## Getting Started

### Dependencies

- Open Weather Map api_key
- npm

### Installing

- Clone this repository

```
$ git clone https://github.com/lZarzao/weather-app
```

- Go into the repository

```
cd weather-app
```

- Install dependencies

```
npm install
```

- Create an .env file at root directory of project
- Copy the line below to the file and replace THE_KEY with your Open Weather Map api_key.

```
REACT_APP_WEATHER_KEY = 'THE_KEY'
```

### Executing program

- Run the server

```
npm start
```

## How the app works

![App screenshot](https://raw.githubusercontent.com/lZarzao/weather-app/master/src/assets/img15.49.png)

- We can choose a city form the nav-bar, there are five preset cities.

![nav-bar screenshot](https://raw.githubusercontent.com/lZarzao/weather-app/master/src/assets/navbar.png)

- We can search for a city with the searchbar, by writing the name in the input and then clicking in the search icon.
- The app can obtain the city where we are by clicking on the location icon
- We can change the data between celsius and fahrenheit by clicking on the F | C buttons

![search-bar screenshot](https://raw.githubusercontent.com/lZarzao/weather-app/master/src/assets/searchbar.png)

## What data do we get?

- Local date and time
- City name and Country code
- Tempeture
- Weather and a representative image
- the background changes depending on the temperature and time of day
- A little forecast and more...

![App screenshot](https://raw.githubusercontent.com/lZarzao/weather-app/master/src/assets/info.png)

![App screenshot](https://raw.githubusercontent.com/lZarzao/weather-app/master/src/assets/forecast.png)

## Responsive design

![App screenshot](https://raw.githubusercontent.com/lZarzao/weather-app/master/src/assets/mobile.png)

## Link to the deployed site

https://weather-app-lzarzao.vercel.app/

## Updates

* esLint config

## Author

<p>Made by <a href="https://www.linkedin.com/in/luis-zarzao/">Luis Zarza</a></p>
<sub><a href="https://github.com/lZarzao">GitHub</a></sub>

## License
