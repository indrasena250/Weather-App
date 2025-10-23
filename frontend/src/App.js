import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);

  const cities = [
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Pune",
    "Visakhapatnam",
    "Vijayawada",
    "Tirupati",
  ];

  const getWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeather(res.data);
    } catch {
      alert("Unable to fetch weather data!");
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧️";
      case "Thunderstorm":
        return "⛈️";
      case "Drizzle":
        return "🌦️";
      case "Snow":
        return "❄️";
      case "Mist":
      case "Fog":
        return "🌫️";
      default:
        return "🌍";
    }
  };

  return (
    <div className="app">
      <h1>🌦️ Weather Forecast</h1>
      <div className="controls">
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          {cities.map((c, index) => (
            <option key={index} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {weather && (
        <div className="weather-card">
          <h2>
            {weather.name} {getWeatherIcon(weather.weather[0].main)}
          </h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].description.toUpperCase()}</p>
          <div className="details">
            <p>💨 Wind: {weather.wind.speed} m/s</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌡️ Feels like: {weather.main.feels_like}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
