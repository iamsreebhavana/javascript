// object prototype functions
//properties-details(),calcAvg
function Player(firstName, lastName, runs) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.runs = runs;
    this.details = function(){
        return `${this.firstName} ${this.lastName}`;
    };
    this.calcAvg=function(){
        var total=0;
        for(var i=0;i<this.runs.length;i++) {
            total += this.runs[i];
        }
        return total / this.runs.length;
        };
    }
    var p1=new Player('sachin', 'tendulkar', [40,50,60]);
    console.log(p1.firstName);//'sachin'
    console.log(p1.lastName);//'tendulkar'
    console.log(p1.details());//sachin tendulkar
    console.log(p1.calcAvg());

    var p2=new Player('virat', 'kohli', [30,70,80]);
    console.log(p2.details());//'virat kohli'
    console.log(p2.calcAvg());//60
    var p3=new Player();
    console.log(p3.details());
    

