var Magazine = require('./Magazine');
var Reader = require('./Reader');
var Publisher = require('./Publisher');

var arctechnica = new Magazine('Arc Technica');
var newYorker = new Magazine('New Yorker');

var jane = new Reader('Jane');
var phoebe = new Reader('Phoebe');
var eve = new Reader('Eve');
var lily = new Reader('Lily');
var pam = new Reader('Pam');

var condeNast = new Publisher('Conde Nast');

arctechnica.subscribe(jane);
arctechnica.subscribe(phoebe);
arctechnica.subscribe(eve);
newYorker.subscribe(eve);
newYorker.subscribe(lily);
newYorker.subscribe(pam);
arctechnica.subscribe(condeNast);
newYorker.subscribe(condeNast);

arctechnica.publish('February');
newYorker.publish('February');
newYorker.publish('Saint Valentines Special');
arctechnica.publish('March');

console.log(condeNast.editions);

