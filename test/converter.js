//Module dependencies
var expect = require('chai').expect;
var converter = require('..');

describe('Temperature Conversor', function (){
    
    describe('Celsius to Farenheit conversion', function (){
        it('Converts 100C to Farenheit', function (){
          var fh = converter.toFarenheit(100);
            expect(fh).to.equal(212);
        })
    })
    
    describe('Farenheit to Celsius conversion', function (){
        it('Converts 212F to Celsius', function (){
          var cl = converter.toCelsius(212);
            expect(cl).to.equal(100);
        })
    })
    
})
