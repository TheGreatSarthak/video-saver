const express = require("express");
const serverless = require("serverless-http");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const router = jsonServer.router("db.json"); // Assuming your data is in db.json
const middlewares = jsonServer.defaults();

app.use(cors()); // Enable CORS for all routes

// Handle the root path
app.use("/", router);

// Your existing middlewares
app.use(middlewares);

module.exports = app;
module.exports.handler = serverless(app);
