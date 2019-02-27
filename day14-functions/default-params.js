function add(n1,n2){
    // ternary operator-short hand operator
    n1=(typeof n1 == 'undefined') ? 0 : n1;
    n2=(typeof n2 == 'undefined') ? 0 : n2;
    return n1+n2;
}
//console.log(add(10,20));
console.log(add());
console.log(add(10));
console.log(add(10,20));


function addition(n1,n2) {
    n1 = n1 || 0;
    n2 = n2 || 0;
    return n1 + n2;
}
console.log(addition());


//es6- default parameter values
function add1(n1 = 0,n2 = 0) {
    return n1+n2;
}
console.log(add1(10,20));
console.log(add1(10));