import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

export default function Randomuser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=10&nat=us")
      .then((response) => {
        setUsers(response.data.results);
      });
  }, []);

  return (
    <div className="Randomuser">
      <h1>This is a random user</h1>
      {users.map((user) => (
        <User key={user.login.uuid} {...user} />
      ))}
    </div>
  );
}
