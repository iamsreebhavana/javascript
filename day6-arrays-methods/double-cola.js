function findNth(names,r){
    for(var i=0;i<r;i++){
        var person=names.shift();
        names.push(person,person);
        
    }
    return names[0];


}
var names=['sheldon','leonard','penny','rajesh','howard'];
console.log('person');

//     for (var i=0; i<r; i++){
//         var person=names.shift();
//         names.push(person,person);
//     }
//     return names[0];
// }
// var result=findNth(names,6)
// var names=['sheldon','leonard','penny','rajesh','howard'];
// console.log(result);
