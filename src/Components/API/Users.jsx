import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=1&results=10&nat=us`)
      .then((res) => {
        setUsers(res.data.results);
      });
  }, []);

  return [users];
};

export default Users;
