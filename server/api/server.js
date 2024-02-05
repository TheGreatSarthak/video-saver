const express = require("express");
const serverless = require("serverless-http");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const router = jsonServer.router("db.json"); // Assuming your data is in db.json
const middlewares = jsonServer.defaults();

app.use(cors()); // Enable CORS for all routes

app.use("/videos", router); // Handle /videos endpoint

// Additional routes for individual videos and related videos
app.use("/videos/:videoId", router); // Handle /videos/:videoId endpoint

app.use("/related-videos", router); // Handle /related-videos endpoint

// Your existing middlewares
app.use(middlewares);

module.exports = app;
module.exports.handler = serverless(app);
