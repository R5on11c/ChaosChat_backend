var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var messages = [];

app.use(cors());
app.use(bodyParser.text());
app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    messages.push (req.body);
    res.sendStatus(200);
});

app.listen(process.env.PORT || 5880);