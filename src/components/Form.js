import React, { Component } from "react";
import View from "./View.js";
import AddItems from "./AddItems.js";
import "./AddItems.css";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);

    this.state = { items: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Event " + this.state.value + " is created! Go to View Events Page!!"
    );
    event.preventDefault();

    const events = {
      eventname: this.state.value,
    };
    console.log(events);

    axios
      .post("http://localhost:8000/events/add", events)
      .then((res) => console.log(res.data));

    this.setState({
      eventname: "",
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <label>Enter Event Name</label>
            <input
              type="text"
              value={this.state.value}
              ref={(a) => (this._inputElement = a)}
              placeholder="Enter Event name"
              onChange={this.handleChange}
            />

            <button type="submit" value="Submit">
              Create Event
            </button>
          </form>
        </div>
        <AddItems entries={this.state.items} />
      </div>
    );
  }
}
export default Form;
