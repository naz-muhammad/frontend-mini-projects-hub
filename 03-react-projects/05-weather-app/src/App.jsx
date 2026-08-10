import React from "react";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-start sm:items-center bg-[#212121]">
      <Weather />
    </div>
  );
};

export default App;