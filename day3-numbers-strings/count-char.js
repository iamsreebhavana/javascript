// countchar(star,char)
// countchar('hello','l');//2
function countChar(str,char) {
    var count=0;
    for(var i=0;i<str.length;i++) {
        if(str[i]===char){
            count=count+1;
        }
    }
    return count;
}
var result=countChar('hello','l');
console.log(result);


        
