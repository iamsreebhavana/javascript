function strCount(a,b){
    var count=0;
    for(var i=0;i<a.length;i++){
        if(a[i]==b){
            count++;
        }

    }
    return count;
}
strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z') // => 0
console.log(strCount());