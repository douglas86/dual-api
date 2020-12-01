import React from "react";
import Users from "../API/Users";
import Weather from "./Weather";

const Randomuser = () => {
  const [users] = Users();
  let city = [];

  if (users.length !== 0) {
    users.forEach((item) => {
      city.push(item.location.city);
    });
  }

  const data = Weather(city);

  return (
    <div>
      <h2>Hello</h2>
      {data}
    </div>
  );
};

export default Randomuser;
