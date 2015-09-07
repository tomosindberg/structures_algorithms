var assert = require("assert");
var Pop = require(__dirname + "/pop");
var Push = require(__dirname + "/push");
var Shift = require(__dirname + "/shift");
var Unshift= require(__dirname + "/unshift");

describe('poping', function(){
  if('Should remove and return last value of array', function(){
    expect(Pop.pop([0,1,2])).to.eql(2);
  });
});

// describe('pushing', function(){
//   if('Should add new value to end of array and return new array', function(){
//     expect(Push.push([0,1,2],4)).to.eql([0,1,2,3]);
//   });
// });

// describe('shifting', function(){
//   if('Should remove and return first value from array', function(){
//     expect(Shift.shift([0,1,2])).to.eql([1,2]);
//   });
// });

// describe('unshifting', function(){
//   if('Should add new value to front of array and return new array', function(){
//     expect(Unshift.unshift([0,1,2],4)).to.eql([4,0,1,2]);
//   });
// });


