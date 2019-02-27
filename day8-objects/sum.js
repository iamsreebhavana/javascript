
     function sumTwoArrayIndexes(a, b) {
    var result = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++){
        result.push((a[i] || 0 )+( b[i] || 0));
        
    }
    return result;

}
console.log(sumTwoArrayIndexes([1,2,3],[2,3,4,5]));
    
    
    