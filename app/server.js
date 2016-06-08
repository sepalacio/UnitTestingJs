//Module dependencies

var express = require('express');
var converter = require('..');
var app = express();

app.get('/toCelsius', function (req, res){
    var temperature = req.query.temperature;
    res.send(200, converter.toCelsius(temperature));
})

app.get('/toFarenheit', function (req, res){
    var temperature = req.query.temperature;
    res.send(200, converter.toFarenheit(temperature));
})

console.log("Hola");

app.listen(3000);