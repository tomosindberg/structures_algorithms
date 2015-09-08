// push add values to end of array
//returns array.length

var array = [1,2,3,4,5,6];

Array.prototype.myPush = function(value) {
  this[this.length] = value;
  return this.length;
};

// console.log(array.myPush(10));