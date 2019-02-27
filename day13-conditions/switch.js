function likes(names){
    var result;
   switch(names.length) {
       case 0:
       result = 'no one likes this';
       break;
       case 1:
       result = `${names[0]} likes this`;
       break;
       case 2:
       result = `${names[0]} and ${names[1]} likes this`;
       break;
       case 3:
       result =`${names[0]}, ${names[1]} and ${names[2]} likes this`;
       break;
       default:
       result = `${names[0]}, ${names[1]} and ${names.length-2} others likes this`;
   }
   return result;
}
console.log(likes([]));
console.log(likes(['peter']));
console.log(likes(['jacob', 'alex']));
console.log(likes(['max','john','mark']));
console.log(likes(['alex','jacob','mark','max']));
console.log(likes(['alex','jacob','mark','max','rohit']));




   


       
   
