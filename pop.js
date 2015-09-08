// pop remove/returns last value from array

var array = [0,1,2,3,4,5];

Array.prototype.myPop = function(){
  var lastValue = this[this.length-1];
  this.length -= 1;
  return lastValue;
};


// console.log(array.myPop());
