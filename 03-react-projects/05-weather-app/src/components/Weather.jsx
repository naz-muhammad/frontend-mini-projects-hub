import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput , setSearchInput] = useState('');

  async function getWeatherData(city) {

    if (!city.trim()) {
        alert('Please enter city name...')
        return
    }

    const cityName = city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('some error occure ')
      }
      const data = await response.json();
      console.log(data);

      setWeatherData(data);
    } catch (error) {
      console.log(error.message);
    }
  }


    
 

  return (

    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center mt-4">

        <h1
         className=""
        >Weather App</h1>

        <div>
            <input
             value={searchInput}
             type="search" 
             onChange={(e)=>{setSearchInput(e.target.value)}}
             placeholder="Enter city... "
            />

            <button
             onClick={()=>{getWeatherData(searchInput)}}
             className=""
            >Search</button>
        </div>

    </div>
    
  );
};

export default Weather;
