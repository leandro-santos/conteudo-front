var express = require('express');
var app = express();
app.use(express.static(__dirname + '/')); // myApp will be the same folder name.

//app.get('/', function (req, res,next) {
//    res.redirect('/');
//});

app.listen(8181, 'localhost');
console.log("MyProject Server is Listening on port 8181");