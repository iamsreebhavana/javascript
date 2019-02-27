function shortestWord(sentence){
var words=sentence.split(' ');
var minLength = words[0].length;
for(var i=0;i<sentence.length;i++){
    if(words[i]<minLength){
        return minLength=words[i].length;
    }
}
return minLength;
}


console.log(shortestWord('Make in india'));
console.log(shortestWord('Have a nice day'));
