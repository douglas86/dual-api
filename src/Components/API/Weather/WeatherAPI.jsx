import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "../Users";

const Api_Key = "2f1018e9254bed448ab88be0fc8fe02a";

const WeatherAPI = (cityArray) => {
  const city = ["Cape Town", "London", "Paris"];

  const [data, setData] = useState({
    isLoading: false,
    data: [],
  });

  console.log(cityArray);

  useEffect(() => {
    cityArray.forEach((item) => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${item}&appid=${Api_Key}&units=metric`
        )
        .then((res) => {
          setData({
            ...data,
            isLoading: true,
            data: res,
          });
        });
    });
  }, []);

  return [data];
};

export default WeatherAPI;
