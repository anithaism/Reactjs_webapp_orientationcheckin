import React, { useState, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Switch from "react-switch";

class sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/student/").then((res) => {
      this.setState({ student: res.data });
      console.log(this.state.student);
    });
  }

  handleChange(checked, index) {
    if (checked == false) {
      console.log("Changed from false to true");
      console.log(this.state.student[index]._id);
      checked = true;

      axios
        .put(
          "http://localhost:8000/api/student/" + this.state.student[index]._id
        )
        .then((res) => console.log(res.data));

      console.log({ checked });
    }
  }

  render() {
    const columns = [
      {
        Header: "Panther ID",
        accessor: "pantherid",
        filterable: true,
      },
      {
        Header: "First Name",
        accessor: "firstname",
        filterable: true,
      },
      {
        Header: "Last Name",
        accessor: "lastname",
        filterable: true,
      },
      {
        Header: "Check In Status",
        accessor: "row.{props.index}",
        Cell: ({ index }) => {
          return (
            <Switch
              id={"switch_" + index}
              onChange={(props) => this.handleChange(this.state.checked, index)}
              checked={this.state.checked}
            />
          );
        },
      },
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.state.student}
        defaultPageSize={10}
        noDataText={"Please Wait..."}
      />
    );
  }
}
export default sample;
