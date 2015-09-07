// pop remove last vale from array

var array = [0,1,2,3,4,5];

var pop = function(array){
  var newArray = array;
  var x = array.length - 1;
  newArray.length = x;
  console.log(newArray);
};

pop(array);