import React from "react";

const SearchBar = ({ searchInput, setSearchInput, getWeatherData }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">

      <input
        className="w-full sm:flex-1 border border-gray-600 bg-[#242424] text-white outline-none py-3 px-4 rounded-md focus:border-blue-500"
        value={searchInput}
        type="search"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        placeholder="Enter city..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getWeatherData(searchInput);
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
  );
};

export default SearchBar;