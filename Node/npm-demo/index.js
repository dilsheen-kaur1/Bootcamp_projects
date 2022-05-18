var _ = require('underscore');
//what require thinks
//1.assumes this to be a core model
//2.thinks its a file or folder
//3.it exists inside node modules

var result =  _.contains([1,2,3],2);//
console.log(result);