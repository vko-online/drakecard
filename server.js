var db = require('./database.json');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.use(express.static(process.cwd() + '/public'));


app.use('/', function (req, res) {
    res.render('index', { artists: db });
});

app.listen(3001, function () {
    console.log('Open localhost:3001');
});