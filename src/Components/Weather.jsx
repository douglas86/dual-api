import React, { useState, useEffect } from "react";
import WeatherAPI from "./API/WeatherAPI";

const Weather = () => {
  const [data] = WeatherAPI();

  return (
    <div>
      <h1>Hello</h1>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.city.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Weather;
