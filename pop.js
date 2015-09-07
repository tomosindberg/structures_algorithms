// pop remove/returns last vale from array

var array = [0,1,2,3,4,5];

var pop = module.exports = exports = function(array){
  var x = array.length;
  var newArray = array;
  var lastValue = array[x-1];
  newArray.length = array.length - 1;
  // console.log(lastValue);
  // console.log(newArray);
};

pop(array);