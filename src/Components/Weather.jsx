import React from "react";
import WeatherAPI from "./API/WeatherAPI";

const Weather = () => {
  const [datas] = WeatherAPI();

  console.log(datas);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Weather;
