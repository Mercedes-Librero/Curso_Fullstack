import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_SOME_KEY

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        )

        setWeatherData(response.data)
      } catch (error) {
        setError(error)
      } 
    }

    fetchData()
  }, [lat, lon])
  

  if (error) {
    return <p>Error al cargar los datos del clima: {error.message}</p>;
  }

  // Temperatura de Kelvin a Celsius
  const temperatureInCelsius = weatherData.main.temp - 273.15

  // primer objeto del array de weather
  //console.log(weatherData)
  const weatherCondition = weatherData.weather[0]

  return (
    <div>
        <div>
          <p>Temperatura: {temperatureInCelsius.toFixed(2)} °C</p>
          {/* Muestra el icono del tiempo */}
          {weatherCondition && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherCondition.icon}.png`}
              alt={weatherCondition.description}
              style={{ width: '100px', height: '100px' }}
            />
          )}
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
    </div>
  );
};

export default Weather