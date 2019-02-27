var counter={
    value:0,
    up: function(){
        return this.value++;
    },
    down: function(){
        return this.value--;
    },
    reset: function(){
        return this.value=0;
    },
    getCurrentValue: function(){
        return this.value;


    }
}
//
console.log(counter.value);//0

counter.up();
console.log(counter.up());

// counter.up();
// console.log(counter.value);//1


// console.log(counter.up);//3

// counter.down();
// console.log(counter.value);//2

// console.log(counter.reset());//0

// console.log(counter.getCurrentValue());//0 (to return the current value(property) of object)
