var express = require('express');
// var path = require('path');
var bodyParser = require('body-parser');

var app = express();
// app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./config/mongoose');
require('./config/routes')(app);

app.listen(7777, function () {
  console.log('ng2-notes running on port 7777');
})