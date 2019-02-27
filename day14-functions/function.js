// function declaration / function defination
function greet(name) { // name= parameters
    var result;
    result = 'Hello' + name;
    return result;
}
console.log(greet('ani')); // invoking the function
// console.log(greet); // reffering to function
// 'ani' becomes an arguement
//in javascript functions are treated as first class citizens
// var n1=10, isTrue= true, prices=[10,20,30],product={}
//function expression
var sayHello= function(name){
    return 'Hello'+ name;

}
console.log(sayHello);
console.log(sayHello('gokul'));
//iife- immediately invked function expression
(function(){
    console.log('im an iife');
})();
//(function(){})();
(function(name){
    console.log('im'+ name + 'from iife');
})('abhi');