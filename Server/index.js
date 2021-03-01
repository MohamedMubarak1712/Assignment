// const express = require("express");
// // const {Pool, Client} = require('pg')
// const bodyParser = require("body-parser");
// const cors = require("cors");



// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "issue_tracker",
//   password: "Mubarak",
//   port: 5432
// });

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());


// post
// app.post("/api/v1/issues", (req, res) => {
//     const { id, label, status, priority } = req.body;
  
//     pool.query(
//       "INSERT INTO issues (id, label, status, priority) VALUES (2, 'wogrh','tjl','kjgg')",
//       [id, label, status, priority],
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
  
//         res.sendStatus(201);
//       }
//     );
//   });


  // get
//   app.get("/api/v1/issues", (req, res) => {
//     pool.query(
//       "SELECT id, label, status, priority FROM issues",
//       [],
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
  
//         res.status(200).json(results.rows);
//       }
//     );
//   });



// app.listen(8000, () => {
//   console.log(`Server is running.`);
// });