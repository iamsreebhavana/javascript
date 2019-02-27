var numbers = [50, 60, 10, 20, 30, 40, 50];

//c style

function findMany(numbers) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 25) {
            result.push(numbers[i]);
        }
    }
    return result;
}

console.log(findMany(numbers)); //[ 50, 60, 30, 40, 50 ]

//javascript way - filter : it returns [] empty array if condition isnt true.
function findMany(numbers){
    var result = numbers.filter(function(num){
        return num > 25;
    });
    return result;
}
console.log(findMany(numbers));
