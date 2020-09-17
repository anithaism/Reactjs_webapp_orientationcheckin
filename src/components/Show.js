import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/student/").then((res) => {
      this.setState({ student: res.data });
      console.log(this.state.student);
    });
  }

  tabRow() {
    return this.state.student.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Students List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Panther ID</th>
              <th>Name</th>
              <th>CheckIn</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default Show;
