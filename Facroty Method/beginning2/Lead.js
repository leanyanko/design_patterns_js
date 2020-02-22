class Lead {
    constructor(name, jobTitle, responsibility) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.responsibility = responsibility
        console.log(`${name} who works as ${jobTitle} is responsible for ${responsibility}`);
    }
}

module.exports = Lead;
