'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get(process.env.PATH, (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.send(process.env.RESPONSE);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});