import React from "react";

const WeatherCard = ({ weatherData }) => {
  return (
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
  );
};

export default WeatherCard;