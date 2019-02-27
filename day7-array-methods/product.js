

var products = [
    { id : 1, name : 'sport tshirt', brand : 'nike', price :750 },
    { id : 2, name : 'sport track pant', brand : 'nike', price :1250},
    { id : 3,  name : 'formal shirt', brand : 'allen solly',price : 1100},
    { id : 4, name: 'casual shirt', brand : 'arrow',price : 500}
];

function filterProducts(products, brandName) {
    var results = products.filter(function(product){
        return product.brand === brandName;
    });
    return results;
}

console.log(filterProducts(products, 'nike'));
 
var result = filterProducts(products, 'nike');
    if(result.length === 0) {
     console.log('No products found');
    } else {
        console.log('Listing Products -', result.length);
        for( var i = 0; i < result.length; i++) {
            console.log(result[i].name);       
    }
 }


 function findProduct(products, brand) {
     
     var res = products.find (function (product) {
         return product.brand === brand;
     });
     return res;
 }

 var result = findProduct(products, 'allen solly');
 if ( result ) {
     console.log(result);
 } else {
     console.log('No products found');
 }

 
