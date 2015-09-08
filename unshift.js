//unshift adds new value to array[0] and shifts everyone to the right
//and returns new array
var array = [0,1,2,3,4];

Array.prototype.myUnshift = function(value){
  var newArray = [];
  newArray[0] = value;
  for(var i = this.length; i > 0; i--){
    newArray[i]=this[i-1];
  }
  return newArray;
};

