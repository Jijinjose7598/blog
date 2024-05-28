
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

var median = (function (arr1, arr2) {
  var merged = [];
  for (var i = 0; i < arr1.length; i++) {
    merged.push(arr1[i], arr2[i]);
  }
  merged.sort((a, b) => a - b);
  var mid = Math.floor(merged.length / 2);
  return (merged[mid - 1] + merged[mid]) / 2;
})(arr1, arr2);

console.log("Median:", median);
