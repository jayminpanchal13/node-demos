/**
 * Created by jaymin on 11/24/2016.
 */

var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    //res.send(__dirname + '/index.html');
    res.render('index'); //Direct passing arguement
});

app.get('/contact', function (req, res) {
    //res.send(__dirname + '/contact.html');
    res.render('contact'); //Direct passing arguement
});

app.post('/contact', urlencodedParser, function (req, res) {
    //res.send(__dirname + '/contact.html');
    console.log(req.body);
    res.render('contact_success', {data: req.body}); //Direct passing arguement
});

app.get('/profile/:name', function (req, res) {
    res.render('profile', {person: req.params.name}); //Direct passing arguement
});

app.get('/user/:name/:age', function (req, res) {
    var data = {
        name: req.params.name,
        age: req.params.age,
        job: 'Web Developer',
        hobbies: ['eating', 'fighting', 'fishing']
    };
    res.render('profile_1', {data: data}); //Passing more than one parameter
});

app.listen(3000);