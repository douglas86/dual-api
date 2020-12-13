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
      <h6>weather</h6>
      {data.map((c) => {
        console.log(c["list"][0]["main"]["temp"]);
      })}
    </div>
  );
};

export default WeatherAPI;
