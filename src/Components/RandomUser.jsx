import React from "react";
import Users from "./API/Users";

export default function Randomuser() {
  // array from users api
  const [users] = Users();
  // stores all cities names from users api
  let city = [];

  // pushes cities name to city array
  if (users.length != 0) {
    users.forEach((item) => {
      city.push(item.location.city);
    });
  }

  console.log(city);

  return (
    <div className="Randomuser">
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
