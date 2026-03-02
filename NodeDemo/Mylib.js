let name="Mehvish"
let age=21;

function fun1(){
    console.log("HI from function 1");
    
}
exports.default = name;

exports.default = 45; // we will get 45 as output because we are exporting default twice and the last one will be considered as default.

exports.default={name,age}; // we will get an object as output ===>
// { default: { name: 'Mehvish', age: 21 } }


module.exports={name, age, fun1}; 

