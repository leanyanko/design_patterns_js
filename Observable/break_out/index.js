var Magazine = require('./Magazine');
var Reader = require('./Reader');
var Publisher = require('./Publisher');



var jane = new Reader('Jane');
var phoebe = new Reader('Phoebe');
var eve = new Reader('Eve');
var lily = new Reader('Lily');
var pam = new Reader('Pam');

var condeNast = new Publisher('Conde Nast');
var arctechnica = new Magazine('Arc Technica', condeNast);
var newYorker = new Magazine('New Yorker', condeNast);
arctechnica.subscribe(jane);
arctechnica.subscribe(phoebe);
arctechnica.subscribe(eve);
newYorker.subscribe(eve);
newYorker.subscribe(lily);
newYorker.subscribe(pam);
arctechnica.subscribe(condeNast);
newYorker.subscribe(condeNast);
condeNast.subscribe(lily);
condeNast.subscribe(pam);

arctechnica.publish('February');
newYorker.publish('February');
var vogue = new Magazine("vogue", condeNast);
newYorker.publish('Saint Valentines Special');
arctechnica.publish('March');

console.log(condeNast.editions);

