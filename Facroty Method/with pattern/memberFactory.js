var Member = require('./Member');
var Lead = require('./Lead');

var memberFactory = (name, jobTitle, type, responsibility) => {
    if (type === 'Lead') {
        return new Lead((name, jobTitle, responsibility));
    }
    return new Member(name, jobTitle);
}

module.exports = memberFactory;
