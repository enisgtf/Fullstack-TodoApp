/* create express app */
const express = require("express");
const app = express();
app.use(express.json());

/* cors */
const cors = require("cors");
app.use(cors());

/* routing */
const routes = require("./routes/routes.js");
app.use("/api", routes);
app.all("*", (req, res, next) => {
  next("Route not found");
});

const errorHandler = require('./middlewares/error-handler.js')
app.use(errorHandler)

module.exports = app;
