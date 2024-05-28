var numbers = [1, 2, 3, 4, 5];

var sum = () => {
    total = 0;
    for (var x = 0; x < numbers.length; x++){
        total +=numbers[x]
    }
    return total
}
console.log(sum())