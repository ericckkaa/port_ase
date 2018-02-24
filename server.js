var bodyParser = require('body-parser');
var path = require('path');


var express = require("express");
var app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});


app.listen(8000, function() {
  console.log("listening on port 8000");
})

module.exports = app;
