import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Users } from "../../App";

import logo from "../../assets/logo.svg";

import "./styles.css";

const Home: React.FC = (props) => {
  const [users, setUsers] = useState<Users | undefined>();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{users?.ad.company}</p>
        <p>{users?.ad.text}</p>
        <Link to="/users" className="App-link">
          View All Users
        </Link>
      </header>
    </div>
  );
};

export default Home;
