var player={
    firstName:'sachin',
    lastName:'tendulkar',
    fullName:function(){
        return this.firstName+' '+this.lastName;
    }
}
console.log(player.firstName);
console.log(player.lastName);
console.log(player);
console.log(player.fullName());
//create an object called as person
//assign 2 properties first name and last name
//define 1 method greet, when invoked,it should return Hi,my name is first name
var person={
    firstName:'sree',
    lastName:'bhavana',
    greet:function(){
        return `hi, my name is ${this.firstName}`;
    },
    wish:function(str){
        return 'hi'+ str;
    }
}
// define another method called as 'wish',which will take one arguement (good morning)-hi,good morning
var values={
    n1:10,
    n2:20,
    add:function(){
        if(arg==='add')
        return this.n1+this.n2 ;
    } else if(arg==='sub')
        return this.n1-this.n2 ;
    }else if(arg==='mul')
        return this.n1*this.n2;
    }
}
arithmetic:function(arg){
    return  this.n1+this.n2;
}
arithmetic:function(arg){
    return this.n1-this.n2;
}
arithmetic:function(arg){
    return this.n1*this.n2;
    arithmetic function (a)


console.log(values.arithmetic('add'));//30
console.log(values.arithmetic('sub'));//-10
console.log(values.arithmetic(''mul));//200

