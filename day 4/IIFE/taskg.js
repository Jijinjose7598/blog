var array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

var uniqueArray = (function (arr) {
  var unique = [];
  for (var x = 0; x < arr.length; x++) {
    if (unique.indexOf(arr[x]) === -1) {
      unique.push(arr[x]);
    }
  }
  return unique;
})(array);

console.log(uniqueArray); 
