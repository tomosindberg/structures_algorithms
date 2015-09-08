//shift removes/returns first value of array

var array = [0,1,2,3,4,5];

Array.prototype.myShift = function(){
  var firstValue = this[0];
  for (var i = 0; i<this.length-1; i++){
    this[i] = this[i+1];
  }
  this.length -=1;
  return firstValue;
};
