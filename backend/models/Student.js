var mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema({
  pantherid: String,
  firstname: String,
  lastname: String,
  department: String,
  level: String,
  campus: String,
  degree: String,
  email: String,
  college: String,
  year: Number,
  checkin: String,
});

module.exports = mongoose.model("Student", StudentSchema);
