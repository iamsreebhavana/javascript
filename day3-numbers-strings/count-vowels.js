// vowels=aeiou
//countvowels('bangalore'); //4
function countvowels(str){

var count=0;
for(var i=0;i<str.length;i++){
if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
    count=count+1;
    //count += 1 OR
}
}
    return count;
}
    var result=countvowels('bangalore');
    console.log(result);

