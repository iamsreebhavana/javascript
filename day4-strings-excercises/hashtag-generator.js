var sentence='code eat sleep';
function hashTagGenerator(sentence){
      var words=sentence.split(' ');
 console.log(words);

 
    for(var i=0;i<words.length;i++){
    var output='#';
    output=output+words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return output;
    words.forEach(function(word) {
        output+= word.charAt(0).toUpperCase()+word.slice(1);
    })
    return output;
                
        // es6 for of
       for(var word of words){
           output=output+word.charAt(0).toUpperCase()+word.slice(1);
       }
       return output;
    }
    console.log(hashTagGenerator(sentence));
    console.log(hashTagGenerator('travel explore fun'));



    