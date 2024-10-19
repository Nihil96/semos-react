import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWeather } from "../actions/weatherActions"

function WeatherDetails() {
  const [city, setCity] = useState("")
  const dispatch = useDispatch()

  const weatherData = useSelector((state) => state.weather.weatherData)
  const loading = useSelector((state) => state.weather.loading)
  const error = useSelector((state) => state.weather.error)

  const handleFetchWeather = (e) => {
    e.preventDefault()
    if (city) {
      dispatch(fetchWeather(city))
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <form onSubmit={handleFetchWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={{ padding: "8px", margin: "10px" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
          Get Weather
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {weatherData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default WeatherDetails
