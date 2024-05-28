var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (data = []) {
  for (var x = 0; x < data.length; x++) {
    if (data[x] % 2 !== 0) {
      console.log(data[x]);
    }
  }
})(nums);
