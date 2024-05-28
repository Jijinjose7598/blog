var numbers = [1, 2, 3, 4, 5];

var sum = (function () {
    total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
})();

console.log(sum); 
