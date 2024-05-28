var array = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = (function (arr, rotations) {
  var length = arr.length;
  rotations = rotations % length;  

  for (let i = 0; i < rotations; i++) {
    var temp = arr.shift(); 
    arr.push(temp); 
  }
  return arr;
})(array, k);

console.log(rotatedArray); 
