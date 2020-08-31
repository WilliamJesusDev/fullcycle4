import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import UsersTable from "./pages/UsersTable";

export interface Users {
  ad: {
    company: string;
    text: string;
    url: string;
  };
  data: [
    {
      avatar: string;
      email: string;
      first_name: string;
      id: number;
      last_name: string;
    }
  ];
}

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UsersTable} />
    </BrowserRouter>
  );
}

export default App;
