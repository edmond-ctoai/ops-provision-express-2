const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const dbhandlers = require("./db.js");
const Pool = require('pg').Pool
const pool = new Pool({
    database: 'ebdb',
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
})


console.log("hola")

pool.query(`CREATE TABLE content (ID SERIAL PRIMARY KEY, data text);`, (err, res) => {
    console.log(err, res);
    pool.end();
});

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/post', jsonParser, function (req, res) {
    res.send(req.body)

})

app.use('/', router);
app.listen(port);

console.log('Running at Port ' + 3000);