import React, { useState, useEffect } from "react";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY;

const WeatherAPI = () => {
  const [data, setData] = useState([]);
  let city = ["Cape Town", "London"];

  useEffect(() => {
    city.forEach((item) => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${item}&appid=${Api_Key}&units=metric`
        )
        .then((res) => {
          setData(res.data);
        });
    });
  }, []);

  return [data];
};

export default WeatherAPI;
