var sum =   require('./operations/sum');
var sub =   require('./operations/substraction');
var mult=   require('./operations/multiplication');
var div =   require('./operations/division');
var moment= require('moment');

var a   =   3;
var b  =   7;

console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
sum (a, b)
mult (a, b)

