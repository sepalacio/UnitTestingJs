//Module dependencies

var expect = require('chai').expect;
var axios = require('axios');


describe('Temperature Conversor API', function (){
    
    describe('Celsius to Farenheit conversion', function (){
        
        //check if the server response is succesfull
        it ('returns status 200', function (done){
            axios
            .get ('http://localhost:3000/toFarenheit?temperature=100').then(function(res){
                expect(res.status).to.equal(200);
                done();
            })
        })
        
        it ('returns 100C in Farenheit', function (done){
            axios
            .get ('http://localhost:3000/toFarenheit?temperature=100').then(function(res){
                expect(res.data).to.equal(212);
                 done();
            })
        })
        
    })
    
    describe('Farenheit to Celsius conversion', function (){
        
        //check if the server response is succesfull
        it ('returns status 200', function (done){
            axios
            .get ('http://localhost:3000/toCelsius?temperature=212').then(function(res){
                expect(res.status).to.equal(200);
                 done();
            })
        })
        
        it ('returns 212F in celsius', function (done){
            axios
            .get ('http://localhost:3000/toCelsius?temperature=212').then(function(res){
                expect(res.data).to.equal(100);
                 done();
            })
        })
        
    })
    
    
})