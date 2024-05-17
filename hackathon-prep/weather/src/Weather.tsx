import React, { useState, useEffect } from 'react';
import { getWeather } from './services/weatherService';
import './App.css';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: [{
    description: string;
    icon: string;
  }];
  name: string;
}

export const Weather: React.FC = () => {
  const [location, setLocation] = useState<string>('Delhi');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const locations = ['Delhi', 'Mumbai', 'London', 'New York', 'Tokyo', 'Bangkok'];

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather(location);
      setWeatherData(data);
    };
    fetchWeather();
  }, [location]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Weather App</h1>
      <div className="form-group">
        <label htmlFor="locationSelect">Select Location:</label>
        <select
          id="locationSelect"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      {weatherData && (
        <div className="weather-report mt-4 text-center">
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.weather[0].description}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <h4>Temperature: {weatherData.main.temp}°C</h4>
          <h5>Humidity: {weatherData.main.humidity}%</h5>
        </div>
      )}
    </div>
  );
};
