import React, { Component } from "react";
import Upload from "./Upload.js";
import Form from "./Form.js";
import { NavLink, HashRouter } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <h4>Enter Login details</h4>
        <label>Enter Username</label>
        <input type="text"></input>
        <br />
        <label>Enter Password </label>
        <input type="password"></input>
        <br />
        <NavLink to="Form">
          <button>Login</button>
        </NavLink>
      </div>
    );
  }
}

export default Login;
