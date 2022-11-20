const express = require("express");
const multiplexController = require("../controllers/multiplex_controller");
const app = express();

// Operations related to the multiplex object
app.post("/multiplex", multiplexController.addMultiplex);
app.post("/multiplex/add-screen", multiplexController.addScreen);

module.exports = app;
