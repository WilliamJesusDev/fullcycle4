import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Users } from "../../App";

import "./styles.css";

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<Users | undefined>();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-4">
          <header className="d-flex align-items-center mx-auto">
            <Link to="/" className="pr-4 text-success">
              Go Home
            </Link>
            <h1>Users List</h1>
            <Link to="/" className="pl-4 text-success"></Link>
          </header>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Avatar</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">E-mail</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.data.map((user) => {
                    return (
                      <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td className="w-25">
                          <img
                            src={user.avatar}
                            className="img-fluid img-thumbnail"
                            alt={user.first_name}
                          />
                        </td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
