// const {Pool, Client} = require('pg')
// const connectionString = 'postgresql://postgres:Mubarak@localhost:5432/testbb'

// const client = new Client({
//     connectionString:connectionString
// })

// client.connect()

// client.query('SELECT * from company',(err,res) => {
//     console.log(err,res)
//     client.end()
// })




// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);



// Bring in required Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Bring in the route
const routes = require("./routes");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.use("/api/notes", routes);

// Define PORT
const PORT = process.env.PORT || 8080;

// Listen to the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});