var source='bangalore';
var destination='mysore';
var distance=150;
var timeTaken='3 hours 30 mins';
function distanceFormatter(source,destination,distance,timetaken){
    return 'the distance between'+source+' and '+destination+'is'+(distance+15)
    +'kms and the time taken is' +timeTaken ;
}
    console.log(distanceFormatter(source,destination,distance,timeTaken));
    //'the distance between ${source} and ${destination} is ${distance+15} kms  
   // and the time taken is ${timeTaken}';
    console.log(distanceFormatter(source,destination,distance,timeTaken));
