const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const routes = require("./routes");


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

const db = require("./models");
db.sequelize.sync();

app.use("/api/notes", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});