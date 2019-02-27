function player(data) {
    this.firstName=data.firstName || 'unknown';
    this.lastName=data.lastName;
    this.middleName=data.middleName;
    this.runs=data.runs;
    this.country=data.country;
    this.t20Team=data.t20Team;
    this.strikeRate=data.strikeRate;
    this.centuries=data.centuries;
    this.fifties=data.fifties;

    this.details=function(){
        return `
        First Name-${this.firstName}
        Last Name-${this.lastName}
        Middle Name-${this.middleName}
        Runs-${this.runs}
        country-${this.country}
        T20 Team-${this.t20Team}
        Strike Rate-${this.strikeRate}
        centuries-${this.centuries}
        Fifties-${this.fifties}`
        
    };
this.calcAvg = function(){
    var total=0;
    for(var i=0; i<this.runs.length; i++){
        total += this.runs[i];

    }
    return total /
    this.runs.length;
};
}
var data={
    firstName:'sachin',
    middleName:'Ramesh',
    lastName:'tendulkar',
    runs:[40,0,60],
    t20Team:'Mumbai Indians',
    country:'India',
    strikeRate: 96,
    centuries: 100,
    fifties:60
}
var p1=new player(data);
console.log(p1.details());