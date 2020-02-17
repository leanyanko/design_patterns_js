var member = function (name, jobTitle) {

    console.log(`${name} who works as ${jobTitle} is now a member of our community`);

    return {
        name: name,
        jobTitle: jobTitle
    }
}

var organizer = function (name, jobTitle, responsibility) {

    console.log(`${name} who works as ${jobTitle} is responsible for ${responsibility}`);

    return {
        name: name,
        jobTitle: jobTitle,
        responsibility: responsibility
    }
}

var speaker = function (name, jobTitle, expertise) {

    console.log(`${name} who works as ${jobTitle} is speaking about ${expertise}`);

    return {
        name: name,
        jobTitle: jobTitle,
        expertise: expertise
    }
}


var Carry = member('Carry', 'Software Engineer');
var Jessica = organizer('Jessica', 'Engineering Manager', 'Organizing');
var Emily = speaker('Emily', 'Front End Developer', 'React');

