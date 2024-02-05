const express = require("express");
const serverless = require("serverless-http");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(cors()); // Enable CORS for all routes

app.use("/api", router);
app.use(middlewares);

module.exports = app;
module.exports.handler = serverless(app);
