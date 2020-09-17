import React, { Component } from "react";
import View from "./View.js";
import { NavLink, HashRouter } from "react-router-dom";

class AddItems extends Component {
  createTasks(item) {
    // return <li onClick={() => this.delete(item.key)}
    return (
      <li key={item.key}>
        <NavLink to="View">{item.text}</NavLink>
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default AddItems;
