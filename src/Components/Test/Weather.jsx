import React, { useState, useEffect } from "react";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY;

const Weather = (city) => {
  const [data, setData] = useState([]);

  console.log(typeof city[0]);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city[0]}&appid=${Api_Key}&units=metric`
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);

  return [data];
};

export default Weather;
