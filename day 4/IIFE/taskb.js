var strings = ["hello", "jijin", "all is well"];

(function () {
  for (var x = 0; x < strings.length; x++) {
    strings[x] = strings[x]
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
})();

console.log(strings);
