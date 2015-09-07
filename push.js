// push add values to end of array

var array = [1,2,3,4,5,6];


var push = function(array, value){

    array[array.length] = value;
    console.log(array);
    return array;
};

push(array, 7);
