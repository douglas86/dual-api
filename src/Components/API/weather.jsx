import React, { useState, useEffect } from "react";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY;

const Weather = (city) => {
  const [data, setData] = useState([]);
  // const city = "London";

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=metric`
      )
      .then((res) => {
        setData(res);
      });
  }, []);

  return [data];
};

export default Weather;
