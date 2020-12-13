import React from "react";
import Users from "../API/Users";

const RandomUser = () => {
  const [users] = Users();

  return (
    <div>
      <h3>Hello</h3>
      {users.map((c) => {
        console.log(c);
      })}
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
};

export default RandomUser;
