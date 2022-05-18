function log(req,res,next){
    console.log('Logging...');
    next();//if we don't do this our request cycle will not terminate & request will keep hanging 
}
//next is reference to next middleware function in pipeway

module.exports = log;

function authenticating(req,res,next){
    console.log('Authenticating...');
    next();
}
module.exports = authenticating;
