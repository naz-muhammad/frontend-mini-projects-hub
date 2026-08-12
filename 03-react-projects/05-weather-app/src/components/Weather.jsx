import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";
import WeatherCard from "./WeatherCard";
import LoadingMessage from "./LoadingMessage";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const [loading , setLoading] = useState(false)

  async function getWeatherData(city) {
    
    if (!city.trim()) {
      setWeatherData(null)
      setLoading(false)
      setError('Please enter city name...')
      return;
    }
    setLoading(true)
    setError("");
    setWeatherData(null);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();

      // console.log(data);

      setWeatherData(data);
      setLoading(false)
      setSearchInput("");
    } catch (error) {
      setLoading(false)
      setWeatherData(null);
      setError(error.message);

    }
  }

  return (
    <div className="w-full max-w-md px-4 py-6">

      <h1 className="mb-6 text-center text-2xl sm:text-3xl font-bold">
        Weather App
      </h1>

      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        getWeatherData={getWeatherData}
      />

      {error && <ErrorMessage error={error} />}

      {loading && <LoadingMessage />}

      {weatherData && <WeatherCard weatherData={weatherData} />}

    </div>
  );
};

export default Weather;