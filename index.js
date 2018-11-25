let express = require('express');
let app = express();
var port = process.env.PORT || 8080;
var http = require('http').Server(app);
var game = {};
var io   = require('socket.io')(http)


var io = require('socket.io');

app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
//app.use(express.static(__dirname + '/static'));


app.get('/', function (req, res) {
    res.render('welcome', {});
});

app.get('/play', function (req, res) {
    res.render('play', {});
})

app.get('/play2', function (req, res) {
    res.render('play2', {});
})

app.listen(port, function () {
     console.log("Equisde running on port " + port);
});