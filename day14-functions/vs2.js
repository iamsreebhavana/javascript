var n1=10;
var n2=20;
function add(){
    n1=100;// updates the value in the global scope
    n2=200;// updates the value in the global scope
    return n1+n2;
}
console.log(add());//300
console.log(n1,n2);//100,200