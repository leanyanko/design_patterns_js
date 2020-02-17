var member = function (name, jobTitle) {
    console.log(`${name} who works as ${jobTitle} is now a member of our community`);
    return {
        name: name,
        jobTitle: jobTitle
    }
}

var lead = function(name, jobTitle, responsibility) {
        console.log(`${name} who works as ${jobTitle} is responsible for ${responsibility}`);
        return {
            name: name,
            jobTitle: jobTitle,
            responsibility: responsibility
        }
}

var memberFactory = function (type, name, jobTitle,  responsibility) {
    if (type === 'lead') {
        return lead(name, jobTitle, responsibility);
    }
    return member(name, jobTitle);
}

var Carry = memberFactory('member', 'Carry', 'Software Engineer');
var Jessica = memberFactory('lead','Jessica', 'Engineering Manager', 'Organizing');
