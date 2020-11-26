import React from "react";
import WeatherAPI from "./WeatherAPI";
import Users from "../Users";

export default function Weather() {
  const [users] = Users();
  let cityArray = [];

  users.forEach((user) => {
    cityArray.push(user.location.city);
  });

  const [weather] = WeatherAPI(cityArray);

  console.log(weather);

  return (
    <div>
      <h1>Weather Data</h1>
    </div>
  );
}
