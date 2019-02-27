var axios = require('axios');
var url = 'https://jsonplaceholder.typicode.com/users';
//console.log(axios);
//axios is the 3rd party package
axios.get(url).then(function(response){
    var users = response.data;
    users.forEach(function(user){
        console.log(user.id,user.username);

    })
}).catch(function(err){
    console.log(err);

});

