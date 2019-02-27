// array-orderd,integer indexed,collection of values
// object-unordered,string(key)indexed,collection values
var person={
    //key=value
    //property
    firstName:'rakesh',
    lastName:'roshan',
    city:'mumbai',
    occupation:'director',
    age:70,
    movies:['knph','karan arjun'],
    awards:{
        filmfare:[2011]
    },
    stillDirecting:true,
    //method
    details:function(){
        return 'im a function inside the object';
    }
};
//accessing via the dot operator
console.log(person.firstName);//'rakesh'
//access via the []
console.log(person['lastName']);//'roshan';
console.log(person.details());
