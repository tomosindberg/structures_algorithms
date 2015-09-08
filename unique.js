//implement a function called unique.
//it takes a array and returns a copy
//of the array with all duplicates removed.

var array = [1,2,2,2,3,4,2,1];

var unique = function(array){
  var match = {};
  var newArray = [];

  for(var i = 0; i < array.length; i++ ){
    if(match[array][i]=='false') {
      match[array] = true;
      newArray.push(arry[i]);
    }
  }
};

// unique(array);