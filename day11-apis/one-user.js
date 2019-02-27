var axios=require('axios');
var url='https://jsonplaceholder.typicode.com/users/1';
//console.log(axios);
axios.get(url).then(function(response){
    var users=response.data;
    console.log(users.id,users.username);
}).catch(function(err){
    console.log(err);

});
//fetch the information and display just the username and emailid
// get is method it takes url as an arguement 
//.then is method it takes function as an arguement if the url fetched correctly
//.catch is a method it shows error if the url contains 



