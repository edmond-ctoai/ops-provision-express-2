const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.port || 8081;

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.listen(port);

console.log('Running at Port ' + port);
