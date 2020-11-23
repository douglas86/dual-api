import React from "react";
import Users from "./API/users";

export default function Randomuser() {
  // array from users api
  const [users] = Users();
  // names of all cities in the users api
  const city = [];

  // pushes all city names to the city array
  for (let i = 0; i < users.length; i++) {
    city.push(users[i].location.city);
  }

  console.log(city);

  return (
    <div className="Randomuser">
      <h1>This is a random user</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <h3>{user.name.first}</h3>
            {console.log(user.location.city)}
          </li>
        ))}
      </ul>
    </div>
  );
}
