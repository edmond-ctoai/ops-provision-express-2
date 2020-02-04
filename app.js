const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

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