import React, { useState, useEffect } from "react";
import Users from "./Users";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY;

const WeatherAPI = () => {
  const [data, setData] = useState([]);
  const [users] = Users();
  let city2 = [];
  let city = ["Cape Town", "London", "Paris"];

  users.forEach((item) => {
    city2.push(item.location.city);
  });

  useEffect(() => {
    city2.forEach((item) => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${item}&appid=${Api_Key}&units=metric`
        )
        .then((res) => {
          setData((prev) => [...prev, res.data]);
        });
    });
  }, []);

  console.log(city2);

  return [data];
};

export default WeatherAPI;
