const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const csvtojson = require("csvtojson");
const mongodb = require("mongodb").MongoClient;
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
mongoose.Promise = require("bluebird");

require("dotenv").config();

var student = require("./routes/student");
//express server
const app = express();
const port = process.env.PORT || 8000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "build")));

//middleware
//app.use(cors());
app.use(express.json());

app.use("/api/student", student);

const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const upload = require("./upload");
app.post("/upload", upload);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//const studentsRouter = require("./routes/students");
//app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
