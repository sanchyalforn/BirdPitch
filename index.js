let express = require('express');
let app = express();
var port = process.env.PORT || 8080;
var http = require('http').Server(app);
var game = {};

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));


app.get('/', function (req, res) {
    res.render('welcome', {});
});

app.get('/play', function (req, res) {
    res.render('play', {});
})

app.listen(port, function () {
     console.log("Equisde running on port " + port);
});