class Event {
    constructor(name, requiredExperience) {
        this.name = name;
        this.requiredExperience = requiredExperience;
    }

    print() {
        console.log(`${this.name} requires ${this.requiredExperience}`);
    }
}

module.exports = Event;
