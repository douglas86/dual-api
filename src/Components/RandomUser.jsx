import React from "react";
import Users from "./API/users";

export default function Randomuser() {
  // array from users api
  const [users] = Users();

  return (
    <div className="Randomuser">
      <h1>This is a random user</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <h3>{user.name.first}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
