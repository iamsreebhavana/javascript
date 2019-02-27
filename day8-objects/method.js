// var player={
//     firstName:'sachin',
//     lastName:'tendulkar'
// }
// //
// console.log(Object.keys(player));//['firstName','lastName']
// console.log(Object.values(player));//['sachin','tendulkar']
// console.log(Object.keys(player).length);//2
// console.log(typeof player);//'object'
// console.log(Array.isArray(player));//false
// //check if a property exists
// console.log(player.hasOwnproperty('firstName'));//true
// console.log(player.hasOwnproperty('average'));//false
// console.log(player.average);//undefined
// //check if value exists
// console.log(Object.values(player).includes('ramesh'));//false
// //adding a new property
// player.country='india';
// player.log(player);
// //update value for a given property
// player.firstName='sachin Ramesh';
// console.log(player.firstName);
// console.log(player);
// // remove a property from an object
// delete player.lastName;
//var arr= [1, 2, 3,5];

// push(arr, 10); // 4

// arr; // [1, 2, 3, 10]

// var secondArr = [5, 2, 1, 6];

// push(secondArr, 20); // 5

// arr; // [5, 2, 1, 6, 20]


// function push(arr,value){
//     for(var i=0;i<arr.length;i++){
//         arr[i]=arr[i+1];
        
     
//     }
//     arr[arr.length+1]=value;
//     return arr.length-1
// }
// console.log(push(arr,10));
// function sumTwoArrayIndexes(a, b) {
//     var x = [];
    
//     for (var i = 0; i < a.length; i++){
//         for (var j = 0; j < b.length; j++){
//             x .push( a[i] + b[j]);

//         }
        
        
//     }
//     return x;

// }
// console.log(sumTwoArrayIndexes(a1,b1));
 var a=[1,2,3];
 var b=[2,3,4,5];
     function sumTwoArrayIndexes(a, b) {
    var result = [];
    for (var i = 0; i = Math.max(a.length, b.length); i++){
        result.push(a[i] || 0 + b[i] || 0);
        
    }
    return result;

}
console.log( sumTwoArrayIndexes(a,b))
    
    
    