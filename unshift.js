//unshift adds new value to array[0] and shifts everyone to the right
//and returns new array
var array = [0,1,2,3,4];

var unshift = module.exports = exports = function(array, value){
  var newArray = [];
  newArray[0] = value;
  var j = 0;
  for(i=1; i<array.length + 1; i++){
    newArray[i] = array[j];
    j++;
  }
  // console.log(newArray);
  return(newArray);
};

unshift(array, 5);

