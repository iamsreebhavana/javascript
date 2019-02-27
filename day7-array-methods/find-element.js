var numbers=[10,20,30,40,50];
function findEle(numbers){
var result;
for(var i=0;i<numbers.length;i++){
    if(numbers[i]>25)
    result=numbers[i]
    break;
}
}




var numbers = [10, 20, 30, 40,50];

//c style 
function findEle(numbers) {
    var result;
    for (var i = 0; i < numbers.length; i++) {
        if(numbers[i] > 25) {
            result = numbers[i];
            break;
        }
    }
    return result;
}
console.log(findEle(numbers)); //30

//find method - javascript way : this method is used to find the first element in the array that passes the test/condition. It returns undefined if condition doesnt match.
function findEle(numbers) {
    //es5 - ecmascript 5 (2009)
    var result = numbers.find(function(num) {
        return num > 25; //if condition is true the 'num' value is returned to 'result'
    });
    return result;
}

console.log(findEle(numbers)); //30

