var axios=require('axios');
var url='https://gender-api.com';
var key='pRPLCejozFwCHFbVCR';
var name = process.argv[2];
//console.log(`${url}/get?name=${name}&key=${key}`);
if(name){
axios.get(`${url}/get?name=${name}&key=${key}`).then(function(response){
    var result=response.data;
    console.log(`the gender of ${name} is ${result.gender}`);
}).catch(function(err){
    console.log(err.code);
});
} else {
    console.log('no valid input');
}
