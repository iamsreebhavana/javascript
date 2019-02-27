/* 
// local database // dummy database
tasks=[]

// inbuilt instance methods
var numbers=[10,20,30]
numbers.push(10,20); // instance method

//inbuilt type methods
Array.isArray(numbers); // static method // class method
Object.values()

//invalid
person.values();

 //properties of task object
title
createAt
dueDate
priority-high,medium & low
isCompleted- boolean

//instance methods
//save();
//markascomplete
//markasincomplete

Task.count();
Task.all();
Task.listIncomplete();

//count()
//all()
*/

var tasks= [];
function Task(data){
    this.title=data.title;
    this.createdAt=new Date;
    this.dueDate=data.dueDate;
    this.priority=data.priority;
    this.isComplicated=false;

    this.save=function(){
        tasks.push(this);

    };
    this.details=function(){
        return `
        title-${this.title}
        created at-${this.createdAt}
        due date-${this.dueDate}
        priority-${this.priority}
        completed-${this.isCompleted}
        `
    };
    this.changeStatus=function(status){
        if(status=='completed'){
            this.isCompleted=true;
        } else {
            this.isCompleted=false;

        }

        }
    }
    Task.count=function(){
        return tasks.length;
    }
    Task.all=function(){
        return tasks;

    }
    var t1=new Task({
        title: 'get membership renewed',
        dueDate: new Date('10-14-2018'),
        priority:'medium'


    });
    t1.save();
    console.log(t1.details());
    var t2= new Task({
        title:'get groceries',
        dueDate: new Date('10-01-2018'),
        priority:'high'
    

    });
    t2.save();
    console.log(t2.details());
    t2.changeStatus('completed');
    console.log(t2.details());
    console.log('Total Tasks',Task.count());

);
Task.all().forEach(function(task){
    console.log(task.details());
})

