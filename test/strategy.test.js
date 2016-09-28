/* global describe, it, expect */
var should = require('chai').should();
var Strategy = require('../lib/strategy');


describe('Strategy', function() {
    
  var strategy = new Strategy(function(){});
    
  it('should be named local', function() {
    strategy.name.should.equal('local');
  });
  
  it('should throw if constructed without a verify callback', function() {
    var result;
    try{
      result = new Strategy();
    }catch(ex){
      result = ex;
    }
    result.message.should.equal('LocalStrategy requires a verify callback')
  });
  
});
