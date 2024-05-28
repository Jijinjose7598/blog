var words = ["level", "noon", "hello", "racecar", "world"];

var palindromes = (function () {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    var reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) {
      result.push(word);
    }
  }
  return result;
})();

console.log(palindromes);
