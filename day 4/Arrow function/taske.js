const words = ["radar", "level", "hello", "world", "racecar"];

const isPalindrome = (word) => {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
};

const palindromes = words.filter((word) => isPalindrome(word));

console.log(palindromes); // Output will be ["radar", "level", "racecar"]
