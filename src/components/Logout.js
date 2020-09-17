import React, { Component } from "react";

import { NavLink, HashRouter } from "react-router-dom";
import axios from "axios";
import Login from "./Login.js";

class Logout extends Component {
  render() {
    return (
      <div className="container">
        <NavLink to="Login">
          <button>Click to Logout</button>
        </NavLink>
      </div>
    );
  }
}

export default Logout;
