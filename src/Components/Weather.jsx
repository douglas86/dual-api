import React, { useState, useEffect } from "react";
import axios from "axios";

const Api_Key = process.env.REACT_APP_API_KEY

export default function Weather() {
  const [city, setCity] = useState("Erie");
  const [data, setData] = useState({
    isFetching: false,
    data: null,
  });

  useEffect(() => {
    setData({
      isFetching: true,
    });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=metric`
      )
      .then((res) => {
        setData({
          isFetching: false,
          data: res.data,
        });
      });
  }, []);
  return (
    <div className="Weather">
      <h1>This is a new file</h1>
    </div>
  );
}
