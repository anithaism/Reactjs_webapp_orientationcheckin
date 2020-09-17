import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink, HashRouter } from "react-router-dom";

import Login from "./components/Login.js";
import Form from "./components/Form.js";
import View from "./components/View.js";
import sample from "./components/sample.js";
import complete from "./components/complete.js";
import Logout from "./components/Logout.js";
import logo from "./gsu.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="heading">
          <img src={logo}></img>
        </div>
        <h3>International Student and Scholar Services</h3>

        <div>
          <ul className="header">
            <li>
              <NavLink exact to="Login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="Form">Create Events</NavLink>
            </li>
            <li>
              <NavLink to="View">Upload File</NavLink>
            </li>
            <li>
              <NavLink to="sample">Student list</NavLink>
            </li>
            <li>
              <NavLink to="complete">Export</NavLink>
            </li>
            <li>
              <NavLink to="Logout">Logout</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/View" component={View} />
            <Route exact path="/sample" component={sample} />
            <Route exact path="/complete" component={complete} />
            <Route exact path="/Logout" component={Logout} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
