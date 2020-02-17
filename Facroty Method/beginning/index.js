console.log('Community digest:');

var Member = require('./Member');
var Lead = require('./Lead');


var Carry = new Member('Carry', 'Software Engineer');
var Jessica = new Lead('Jessica', 'Engineering Manager', 'Organizing');

console.log(Carry.toString());
console.log(Jessica.toString());

