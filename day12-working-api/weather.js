//'https://api.openweathermap.org/data/2.5/weather?q=banglore,india&appid=b6907d289e10d714a6e88b30761fae22'



var axios=require('axios');
var url=`https://api.openweathermap.org/data/2.5`;
var key='2a2725ccadfb07ae0510e9f610e17afb';

var cityName=process.argv[2];
if(cityName){
    axios.get(`${url}/weather?q=${cityName}&appid=${key}`).then(function(response){
        var result=response.data;
        console.log(`The temperature in ${cityName} is ${result.main.temp} `);
    }).catch(function(err){
        console.log(err.code);
    });
    } else {
        console.log('no valid input');
    }
    
