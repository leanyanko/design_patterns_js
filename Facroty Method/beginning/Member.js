class Member {
    constructor(name, jobTitle) {
        this.name = name;
        this.jobTitle = jobTitle;
        console.log(`${name} who works as ${jobTitle} is now a member of our community`);
    }
}

module.exports = Member;
