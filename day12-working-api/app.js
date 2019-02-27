var axios=require('axios');
var url='https://gender-api.com';
var key='pRPLCejozFwCHFbVCR';
var name='rakesh';
//console.log(`${url}/get?name=${name}&key=${key}`);
axios.get(`${url}/get?name=${name}&key=${key}`).then(function(response){
    var result=response.data;
    console.log(`the gender of ${name} is ${result.gender}`);
}).catch(function(err){
    console.log(err.code);
});
//api format=https://gender-api.com/get?name=bhavana&key=yourkey



// {"name":"elizabeth", "gender":"female", "samples":355, "accuracy":100, "duration":"34ms"}
//https://gender-api.com/get?name=elizabeth&key=yourkey


