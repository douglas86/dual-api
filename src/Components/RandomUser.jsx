import React from "react";
import Users from "./API/Users";
import Weather from "./API/Weather";

export default function Randomuser() {
  // array from users api
  const [users] = Users();
  let city = [];

  // if (users.length > 0) {
  //   users.map((item) => {
  //     city.push(Weather(item.location.city));
  //   });
  // }

  // console.log(city);

  return (
    <div className="Randomuser">
      <h1>Random weather data</h1>

      <h1>This is a random user</h1>
      {users.map((user) => (
        <div key={user.login.uuid}>
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <img src={user.picture.large} alt="" />
          <p>Gender: {user.gender}</p>
          <p>City: {user.location.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
