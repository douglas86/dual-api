import React from "react";
import Users from "./API/users";

const Weather = () => {
  const [users] = Users();
  return (
    <div className="Weather">
      <h1>This is a new file</h1>
      {users.map((city) => (
        <p>{city.location.city}</p>
      ))}
    </div>
  );
};

export default Weather;
