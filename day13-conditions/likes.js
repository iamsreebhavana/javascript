function likes(names){
    if(names.length == 0) {
        return 'no one likes this';

    } else if (names.length == 1){
        return `${names[0]} likes this`;

    } else if (names.length == 2){
        return `${names[0]} and ${names[1]} likes this`;
    } else if (names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[3]} likes this`;

    } else {
        return `${names[0]}, ${names[1]} and ${nameslength - 2} others likes this`;
    }
}
console.log(likes([]));
console.log(likes(['peter']));
console.log(likes(['jacob', 'alex']));
console.log(likes(['max','john','mark']));
console.log(likes(['alex','jacob','mark','max']));
console.log(likes(['alex','jacob','mark','max','rohit']));