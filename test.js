var assert = require("assert");
var Array = require(__dirname + "/push");
var Array = require(__dirname + "/shift");
var Array= require(__dirname + "/unshift");
var Array = require(__dirname + "/pop");
var expect = require('chai').expect;

var testArray = [0,1,2,3,4,5];



describe('poping', function(){
  it('Should remove and return last value of array', function(){
    expect(testArray.myPop()).to.eql(5);
    testArray = [0,1,2,3,4,5];
  });
});

describe('pushing', function(){
  it('Should add new value to end of array and return new array.length', function(){
    expect(testArray.myPush(4)).to.eql(7);
    testArray = [0,1,2,3,4,5];
  });
});

describe('shifting', function(){
  it('Should remove and return first value from array', function(){
    expect(testArray.myShift()).to.eql(0);
    testArray = [0,1,2,3,4,5];
  });
});

describe('unshifting', function(){
  it('Should add new value to front of array and return new array', function(){
    expect(testArray.myUnshift(10)).to.eql([10,0,1,2,3,4,5]);
    testArray = [0,1,2,3,4,5];
  });
});


