import React, { Component } from "react";
import axios from "axios";
import "./complete.css";

var existingarray;
var existingarray1;

class complete extends Component {
  componentDidMount() {
    axios.get("http://localhost:8000/api/student/checkin").then((res) => {
      this.setState({ student: res.data });
      console.log(this.state.student);
    });
  }

  temp() {
    var newarr = [];
    var newarr1 = [];
    var newarr2 = [];
    var newarr3 = [];
    var newarr4 = [];
    existingarray = [];
    existingarray1 = [];

    var re = this.state.student;
    var A = [["pantherid"]];
    var B = [["firstname"]];
    var C = [["lastname"]];
    var D = [["college"]];
    var E = [["level"]];
    var F = [["campus"]];
    //console.log(this.pantherid.checked);
    if (this.pantherid.checked == true) {
      for (var item = 0; item < re.length; item++) {
        A.push([re[item].pantherid]);
      }
      for (var i = 0; i < A.length; ++i) {
        existingarray.push(A[i].join(","));
      }
    }
    if (this.fname.checked == true) {
      for (var item = 0; item < re.length; item++) {
        B.push([re[item].firstname]);
      }
      for (var i = 0; i < B.length; ++i) {
        newarr.push(B[i].join(","));
      }

      existingarray = existingarray.map(function (c, i) {
        return [c, newarr[i]];
      });
    }

    if (this.lname.checked == true) {
      for (var item = 0; item < re.length; item++) {
        C.push([re[item].lastname]);
      }
      for (var i = 0; i < C.length; ++i) {
        newarr1.push(C[i].join(","));
      }

      existingarray = existingarray.map(function (c, i) {
        return [c, newarr1[i]];
      });
    }

    if (this.college.checked == true) {
      for (var item = 0; item < re.length; item++) {
        D.push([re[item].college]);
      }
      for (var i = 0; i < D.length; ++i) {
        newarr2.push(D[i].join(","));
      }

      existingarray = existingarray.map(function (c, i) {
        return [c, newarr2[i]];
      });
    }

    if (this.level.checked == true) {
      for (var item = 0; item < re.length; item++) {
        E.push([re[item].level]);
      }
      for (var i = 0; i < E.length; ++i) {
        newarr3.push(E[i].join(","));
      }

      existingarray = existingarray.map(function (c, i) {
        return [c, newarr3[i]];
      });
    }

    if (this.campus.checked == true) {
      for (var item = 0; item < re.length; item++) {
        F.push([re[item].campus]);
      }
      for (var i = 0; i < F.length; ++i) {
        newarr4.push(F[i].join(","));
      }

      existingarray = existingarray.map(function (c, i) {
        return [c, newarr4[i]];
      });
    }
    return existingarray;
  }
  exportXls() {
    existingarray = this.temp();
    var csvString = existingarray.join("%0A");

    var a = document.createElement("a");
    a.href = "data:attachment/xlsx," + csvString;
    a.target = "_Blank";
    a.download = "testfile.xlsx";
    document.body.appendChild(a);
    a.click();
  }
  exportCSV() {
    existingarray = this.temp();
    var csvString = existingarray.join("%0A");

    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_Blank";
    a.download = "testfile.csv";
    document.body.appendChild(a);
    a.click();
  }

  exportCSVnot() {
    var result = axios
      .get("http://localhost:8000/api/student/checkinnot")
      .then((res) => {
        this.setState({ student: res.data });
        console.log(this.state.student);
      });
    existingarray = this.temp();
    var csvString = existingarray.join("%0A");

    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_Blank";
    a.download = "testfile.csv";
    document.body.appendChild(a);
    a.click();
  }

  exportCSVall() {
    var result = axios.get("http://localhost:8000/api/student/").then((res) => {
      this.setState({ student: res.data });
      console.log(this.state.student);
    });

    existingarray = this.temp();
    var csvString = existingarray.join("%0A");

    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_Blank";
    a.download = "testfile.csv";
    document.body.appendChild(a);
    a.click();
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            ref={(input) => {
              this.pantherid = input;
            }}
          />
          <label> Panther ID</label>

          <input
            type="checkbox"
            ref={(input) => {
              this.fname = input;
            }}
          />
          <label>First Name</label>

          <input
            type="checkbox"
            ref={(input) => {
              this.lname = input;
            }}
          />
          <label>Last Name</label>

          <input
            type="checkbox"
            ref={(input) => {
              this.college = input;
            }}
          />
          <label>College</label>

          <input
            type="checkbox"
            ref={(input) => {
              this.level = input;
            }}
          />
          <label>Level</label>

          <input
            type="checkbox"
            ref={(input) => {
              this.campus = input;
            }}
          />
          <label>Campus</label>
          <br />
        </div>

        <div class="btn-toolbar">
          <button
            onClick={() => {
              this.exportCSV();
            }}
          >
            CSV(Check-in)
          </button>

          <button
            onClick={() => {
              this.exportXls();

              //this.exportCSV();
            }}
          >
            xlsx(Check-in)
          </button>
          <br />
          <button
            onClick={() => {
              this.exportCSVnot();

              //this.exportCSV();
            }}
          >
            CSV(Not Checked-in)
          </button>

          <button
            onClick={() => {
              this.exportCSVall();

              //this.exportCSV();
            }}
          >
            CSV(All)
          </button>
        </div>
      </div>
    );
  }
}
export default complete;
