//shift removes/returns first value of array

var array = [ 0,1,2,3,4,5];

var shift = module.exports = exports = function(array){
  var first = array[0];
  var newArray = [];
  var j = 0;
  for (var i = 1; i<array.length-1; i++){
    newArray[j] = array[i];
    j++;
  }
  // console.log(first);
  // console.log(newArray);
};

shift(array);