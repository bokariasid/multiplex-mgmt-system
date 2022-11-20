const express = require("express");
const scheduleController = require("../controllers/schedule_controller");
const app = express();

// Get a list of all debts.
app.post("/schedule", scheduleController.addSchedule);

module.exports = app;
