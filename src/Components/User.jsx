import React from "react";

const User = ({ name, location, email, picture }) => {
  const { title, first, last } = name;
  const { city, state } = location;
  return (
    <div>
      <p>
        <strong>Name:</strong> {title} {first} {last}
      </p>
      <p>
        <strong>City: </strong> {city}
      </p>
      <p>
        <strong>State: </strong> {state}
      </p>
      <img src={picture.large} alt="" />
      <hr />
    </div>
  );
};

export default User;
