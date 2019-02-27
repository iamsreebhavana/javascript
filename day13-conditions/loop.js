var name = 'dct academy';
for(var i =0; i<name.length; i++){
    console.log(name[i].toUpperCase());
}
var fruits = ['mango','papaya','apple','watermelon'];
for(var i =0; i< fruits.length; i++){
    console.log(fruits[i].toUpperCase());
}
console.log('*'.repeat(15));
console.log('for each');
console.log('*'.repeat(15));
// forEach (es5)
fruits.forEach(function(fruit){
    console.log(fruit);
});
console.log('*'.repeat(15));
console.log('for of');
console.log('*'.repeat(15));
// for of (es6)
for(var fruit of fruits){
    console.log(fruit);
}

for(var char of name){
    console.log(char);
}
// for in
console.log('*'.repeat(15));
console.log('for in');
console.log('*'.repeat(15));

var player={
    firstName: 'Sachin',
    lastName: 'Tendulkar'
}
for(var key in player) {
    console.log(key,player[key]);
}
Object.keys(player).forEach(function(key){
    console.log(key,player[key]);
});
for(var key of Object.keys(player)) {
    console.log(key, player[key]);
}

