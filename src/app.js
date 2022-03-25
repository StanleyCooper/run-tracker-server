const express = require("express");

// error handlers
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

// server routers
const runsRouter = require("./runs/runs.router");

const app = express();

app.use(express.json());

app.use("/", runsRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
