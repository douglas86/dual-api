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
          console.log(res.data);
        });
    }
  }, []);

  return (
    <div>
      {data.map((c, index) => (
        <div key={index}>
          <p>Min temp: {c["list"][0]["main"]["temp_min"]}</p>
          <p>Max temp: {c["list"][0]["main"]["temp_max"]}</p>
          <img src={c["list"][0]["weather"][0]["icon"]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default WeatherAPI;
