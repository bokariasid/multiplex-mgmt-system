const express = require("express");
require("dotenv").config();
const db = require('./db');
const multiplexRouter = require('./routes/multiplex');
const scheduleRouter = require('./routes/schedule');
const app = express();

app.use(express.json());

// Add the API routes
app.use(multiplexRouter);
app.use(scheduleRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at port ${port}.`);
});

module.exports = app;
