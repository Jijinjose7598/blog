var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var primes = (function () {
  function isprime(num) {
    if (num <= 1) return false;
    for (var x = 2; x <= Math.sqrt(num); x++) {
      if (num % x === 0) return false;
    }
    return true;
  }
  var primenumbers = [];
  for (var x = 0; x < numbers.length; x++) {
    if (isprime(numbers[x])) {
      primenumbers.push(numbers[x]);
    }
  }
  return primenumbers;
})();
console.log(primes);
