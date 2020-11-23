import React, { useState, useEffect } from "react";
import Users from "./users";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY;

export default function Weather() {
  const [users] = Users();
  const city = "London";
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
          data: res.data.results,
        });
        console.log(`res ${res}`);
      });
  }, []);
  return (
    <div className="Weather">
      <h1>This is a new file</h1>
    </div>
  );
}
