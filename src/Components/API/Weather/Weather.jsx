import React from "react";
import WeatherAPI from "./WeatherAPI";
import Users from "../Users";

export default function Weather() {
  const [users] = Users();
  let cityArray = ["Cape Town", "London"];

  users.forEach((user) => {
    cityArray.push(user.location.city);
  });

  const [weather] = WeatherAPI(cityArray);

  users.forEach((user) => {
    console.log(user);
  });

  return (
    <div>
      <h1>Weather Data</h1>
    </div>
  );
}
