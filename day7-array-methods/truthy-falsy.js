/*

falsy values - false, 0, undefined, '', NaN, null
truthy values - true, 1, -1, [], {} , 'dct academy'

*/

var values = [10, 20, true, false, 0 , 1, -1, -2, '', [], {}, undefined, NaN, null,  'dct academy'];

function findTypes(values) {
    var  truthy = [], falsy = [];
    values.forEach(function(value){
        if (value) {
            truthy.push(value);
        } else {
            falsy.push(value);
        }
    });
    return [truthy, falsy];
}

console.log(findTypes(values)); //[ [ 10, 20, true, 1, -1, -2, [], {}, 'dct academy' ],[ false, 0, '', undefined, NaN, null ] ]
