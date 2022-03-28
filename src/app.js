const express = require("express");
const cors = require('cors');

const app = express();

// error handlers
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// server routers
const runsRouter = require("./runs/runs.router");

app.use(express.json());
app.use(cors());

app.use("/runs", runsRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
