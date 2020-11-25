import React, { useState, useEffect } from "react";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY;

const WeatherAPI = ({ city }) => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    setData(city);
  });

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${Api_Key}&units=metric`
  //     )
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // }, []);

  return [data];
};

export default WeatherAPI;
