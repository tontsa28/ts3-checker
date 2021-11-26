// Import required modules
const express = require("express");
const dotenv = require("dotenv").config();
const fs = require("fs");
const { pid } = require("process");
const app = express();

// Environment variables
const port = process.env.PORT;
const pidfile = process.env.PIDFILE;

// Get root request
app.get("/", async (req, res) => {

    // If TeamSpeak pidfile was found
    if (fs.existsSync(pidfile)) {
        console.log("TeamSpeak server is running, returning code 200");
        res.status(200).send();
    }

    // If TeamSpeak pidfile was not found
    else {
        console.log("TeamSpeak server pid file not found, returning code 404");
        res.status(404).send();
    }

})

// Listen on the given port
app.listen(port, () => {
    console.log("Tool listening on port " + port);
})