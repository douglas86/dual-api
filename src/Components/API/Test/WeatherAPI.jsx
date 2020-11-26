import React, { useState, useEffect } from "react";
import Users from "../Users";
import axios from "axios";

//api key used for the openweathermap
const Api_Key = "2f1018e9254bed448ab88be0fc8fe02a";

const WeatherAPI = () => {
  //initialize state
  const [users] = Users();
  let cityArray = ["Cape Town", "London", "Paris", "Pretoria"];
  const [data, setData] = useState({
    isLoading: false,
    data: null,
  });

  useEffect(() => {
    setData({
      isLoading: true,
    });
    if (cityArray.length > 0) {
      cityArray.forEach((item) => {
        console.log(`city: ${item}`);
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${item}&appid=${Api_Key}&units=metric`
          )
          .then((res) => {
            setData({
              isLoading: false,
              data: res,
            });
          });
      });
    }
  }, []);

  console.log(data);

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
};

export default WeatherAPI;
