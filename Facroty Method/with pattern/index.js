console.log('Community digest:');

var memberFactory = require('./memberFactory');

var Carry = memberFactory('Carry', 'Software Engineer');
var Jessica = memberFactory('Jessica', 'Engineering Manager', 'Organizing');

console.log(Carry.toString());
console.log(Jessica.toString());

