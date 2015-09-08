//frequency2: given an array of english words,
//figure out what the most common letter (anywhere in a word) is.

var array = ['hello',  'worlddddddddd',  'i', 'am', 'working', 'at', 'coding', 'look'];

var freq = function(array){
  var result = 0;
  var obj = {};
  var most = 0;

  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
      var letter = array[i][j];
      if(obj[letter]){
        obj[letter].value +1;
      }
      if(obj[letter] > most){
        result = letter;
        most = obj[letter];
      }
      else {
        obj[letter] = 1;
      }
    }
  }
  return result;
};
console.log(freq(array));
//still not working
