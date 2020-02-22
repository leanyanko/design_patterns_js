var Speaker = require('./Speaker');
var { Event,
    InterDisciplinaryEvent,
    InternationalEvent } = require('./Event');

var dina = new Speaker('Dina', 1);
var meetup = new Event('Meetup', 2);
var party = new Event('Party', 1);
var conference = new Event("Conference", 5);

var interdisciplinary_meetup = new InterDisciplinaryEvent(meetup);
var international_interdisciplinary_meetup = new InternationalEvent(interdisciplinary_meetup);
var international_conference = new InternationalEvent(conference);

dina.speak(party);
dina.speak(meetup);
dina.speak(conference);
dina.speak(interdisciplinary_meetup);

dina.printStatus();
