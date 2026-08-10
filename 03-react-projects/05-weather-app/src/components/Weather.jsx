import React, { useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [error , setError] = useState('')

  async function getWeatherData(city) {
    if (!city.trim()) {
      alert("Please enter city name...");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed");
        
      }

      const data = await response.json();
      console.log(data);

      setWeatherData(data);
      setSearchInput("");
      setError('')

    } catch (error) {
      setWeatherData(null)
      console.log(error.message);
      setError(error.message)
    }
  }

  return (
    <div className="w-full max-w-md px-4 py-6 sm:px-6 text-white">

      <h1 className="mb-6 text-center text-2xl  sm:text-3xl font-bold">
        Weather App
      </h1>

      <div className="flex flex-col sm:flex-row gap-3">

        <input
          className="w-full sm:flex-1 border border-gray-600 bg-[#242424] text-white outline-none py-3 px-4 rounded-md focus:border-blue-500"
          value={searchInput}
          type="search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Enter city..."
          onKeyDown={(e)=>{
            if (e.key === "Enter") {
              getWeatherData(searchInput)
            }
          }}
        />

        <button
          onClick={() => {
            getWeatherData(searchInput);
          }}

          className="w-full text-white sm:w-auto bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md font-medium transition"
        >
          Search
        </button>
      </div>
      
      {
        error && (
          <div>
            <p className="mt-4 w-full rounded-md border border-red-500/50 bg-red-950/40 px-4 py-3 text-red-300"> {error} </p>
          </div>
        )
      }

      {weatherData && (
        <div className="mt-8 w-full bg-[#242424] rounded-xl p-5 sm:p-6 shadow-xl text-center">

          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            {weatherData.name}
          </h1>

          <div className="flex flex-col items-center">

            <img
              className="w-24 h-24"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
            />

            <div className="flex flex-col items-center mb-5">
              <span className="text-4xl sm:text-5xl font-bold">
                {weatherData.main.temp}°C
              </span>

              <span className="text-gray-400 mt-1 capitalize">
                {weatherData.weather[0].main}
              </span>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-4 space-y-3">

            <p className="text-gray-300">
              💧 Humidity:{" "}
              <span className="text-white font-medium">
                {weatherData.main.humidity}%
              </span>
            </p>

            <p className="text-gray-300">
              💨 Wind:{" "}
              <span className="text-white font-medium">
                {weatherData.wind.speed} m/s
              </span>
            </p>

          </div>

        </div>
      )}
    </div>
  );
};

export default Weather;