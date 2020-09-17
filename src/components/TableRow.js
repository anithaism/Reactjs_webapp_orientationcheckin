import React, { Component } from "react";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.PantherID}</td>
        <td>{this.props.obj.Name}</td>
        <td>{this.props.obj.CheckIn}</td>
      </tr>
    );
  }
}

export default TableRow;
