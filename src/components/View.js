import React, { Component } from "react";
import Upload from "./Upload.js";

import axios from "axios";

class View extends Component {
  state = {
    title: "",
    file: "",
  };

  handleOnChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleOnUploadFile = (e) => this.setState({ file: e.target.files[0] });

  handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("file", this.state.file);
    axios
      .post("/api/post", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="container">
        <h4>Create Event</h4>
        <label>Event name:</label>
        <input type="text" />

        <label>Semester</label>
        <select id="semester">
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>

        <label>Year</label>
        <select id="year">
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <br />
        <br />
        <label>Start Date</label>
        <input type="date" />
        <label>End Date</label>
        <input type="date" />
        <br />
        <br />
        <Upload />
      </div>
    );
  }
}

export default View;
