import React from "react";
import WeatherAPI from "./WeatherAPI";
import Users from "../Users";

const Weather = () => {
  const [users] = Users();
  let city = [];

  users.forEach((user) => {
    city.push(user.location.city);
  });

  return (
    <div>
      <WeatherAPI city={city} />
    </div>
  );
};

export default Weather;
