import React, { useState, useEffect } from "react";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY;

const WeatherAPI = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    for (const [key, values] of Object.entries(props)) {
      let city = values["location"]["city"];
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=metric`
        )
        .then((res) => {
          setData((prev) => [...prev, res.data]);
        });
    }
  }, []);

  return (
    <div>
      <h4>Weather Conditions</h4>
      {data.map((c, index) => (
        <div key={index}>
          <p>Min temp: {c["list"][0]["main"]["temp_min"]}{'\u00b0'}C</p>
          <p>Max temp: {c["list"][0]["main"]["temp_max"]}{'\u00b0'}C</p>
          <img
            src={`http://openweathermap.org/img/wn/${c["list"][0]["weather"][0]["icon"]}.png`}
            alt="Nothing"
          />
        </div>
      ))}
    </div>
  );
};

export default WeatherAPI;
