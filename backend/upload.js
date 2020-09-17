const IncomingForm = require("formidable").IncomingForm;
const csvtojson = require("csvtojson");
const mongoose = require("mongoose");
const mongodb = require("mongodb").MongoClient;

module.exports = function upload(req, res) {
  var form = new IncomingForm();

  require("dotenv").config();
  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

  form.on("file", (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path

    csvtojson()
      .fromFile(file.path)
      .then((csvData) => {
        console.log(csvData);

        mongodb.connect(
          uri,
          { useNewUrlParser: true, useUnifiedTopology: true },
          (err, client) => {
            if (err) throw err;

            client
              .db("test")
              .collection("students")
              .insertMany(csvData, (err, res) => {
                if (err) throw err;

                console.log(`Inserted: ${res.insertedCount} rows`);
                client.close();
              });
          }
        );
      });
  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
