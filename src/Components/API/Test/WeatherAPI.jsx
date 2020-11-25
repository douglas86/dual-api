import React, { useState, useEffect } from "react";
import axios from "axios";

//api key used for the openweathermap
const Api_Key = "2f1018e9254bed448ab88be0fc8fe02a";

const WeatherAPI = () => {
  //initialize state
  const [city, setCity] = useState("Cape Town");
  let c = ["Cape Town"];
  const [data, setData] = useState({
    isLoading: false,
    data: null,
  });

  useEffect(() => {
    setData({
      isLoading: true,
    });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=metric`
      )
      .then((res) => {
        setData({
          isLoading: false,
          data: res,
        });
      });
  }, [city]);

  console.log(c);

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
};

export default WeatherAPI;
