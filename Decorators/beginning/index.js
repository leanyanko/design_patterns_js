var Speaker = require('./Speaker');
var Event = require('./Event');

var dina = new Speaker('Dina', 1);
var meetup = new Event('Meetup', 2);
var party = new Event('Party', 1);
var conference = new Event("Conference", 5);

dina.speak(party);
dina.speak(meetup);
dina.speak(conference);

dina.printStatus();
