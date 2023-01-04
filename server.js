'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get(process.env.PATH, (req, res) => {
    res.setHeader("Content-Type", "application/json");    
    res.send(process.env.RESPONSE);
});

app.get(process.env.PATH2, (req, res) => {
    res.setHeader("Content-Type", "application/json");    
    res.send(process.env.RESPONSE2);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});