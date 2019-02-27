var sentence = 'virat virat sachin dhoni virat sachin';
function findFrequency(sentence){
    var result = {};
    var res=[];
    var words = sentence.split(' ');
    for (var word of words){
        if(result[word]){
            result[word]++;


        } else {
            result[word]=1
        }
        for(var key in result){
            res.push(`${key} - `+'*'.repeat(`${result[key]}`));
        }
        
    }
    return result;
}
    
    
console.log(findFrequency(sentence));