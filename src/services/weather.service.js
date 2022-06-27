/* eslint-disable camelcase */
import { DateTime } from "luxon"

const api = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: "https://api.openweathermap.org/data/2.5"
}

// using luxon to format the date/time of the api
const localTime = (sec, zone, format = "cccc, dd LLLL yyyy' - Local time: 'hh:mm a") => 
    DateTime.fromSeconds(sec).setZone(zone).toFormat(format)

// call the api
const getWeatherData = (type, searchParams) => {
    const url = new URL(`${api.base  }/${type}`)
    url.search = new URLSearchParams({...searchParams, appid:api.key})

    return fetch(url)
        .then(res => res.json())
}

// format the response
const currentWeatherDataFormat = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: detail, icon} = weather[0]

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, speed, detail, icon}
}

// Format the response
const forecastWheaterDataFormat = (data) => {
    let {daily} = data
    const {timezone} = data
    daily = daily.slice(1,6).map(day => ({
            title: localTime(day.dt, timezone, 'cccc'),
            temp: day.temp.day,
            icon: day.weather[0].icon
        }))

    return {timezone, daily}
}

const getFullWeatherData = async (searchParams) => {
    const currentWeatherData = await getWeatherData('weather', searchParams)
        .then(data => currentWeatherDataFormat(data))

    const {lat, lon} = currentWeatherData

    const forecastWheaterData = await getWeatherData('onecall', {
        lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units
    })
        .then(data => forecastWheaterDataFormat(data))

        return {...currentWeatherData, ...forecastWheaterData}
}

// url to get the api icon
const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@4x.png`


export default getFullWeatherData

export { iconUrl, localTime }