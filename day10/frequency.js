function frequency(str){
    var result={};
    for(var char in str)
    if(result[char]){
    result[char]++;
    } else {
    result[char]=1;
}
return result;
}
console.log(frequency('aasdff'));