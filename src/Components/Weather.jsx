import React from "react";
import WeatherAPI from "./API/WeatherAPI";

const Weather = () => {
  const [data] = WeatherAPI();

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Weather;
