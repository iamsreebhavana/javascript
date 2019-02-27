
function reArrange(a){
    for(var i=0;i<a.length;i++){
        var arr= a.split('').sort().join('');
    }
    return arr;

}
console.log(reArrange(a));
//     var count = 0;
//     for (var i = 0; i < a.length; i++) {
//         var arr = a.split('').sort();
        
        

//         if (typeOf(a[i]) == Number) {
//             count = count + a[i];
//         }
//     }

//         return arr;
// }



// Input:
// AC2BEW3
// ACCBA10D2EW30

 

// Output:
// ABCEW5
// AABCCDEW6