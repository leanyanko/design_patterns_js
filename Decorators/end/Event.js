class Event {
    constructor(name, requiredExperience) {
        this.name = name;
        this.requiredExperience = requiredExperience;
    }

    print() {
        console.log(`${this.name} requires ${this.requiredExperience}`);
    }
}

class InterDisciplinaryEvent {
    constructor(baseEvent) {
        this.name = `Interdisciplinary ${baseEvent.name}`;
        this.requiredExperience = baseEvent.requiredExperience + 2;
    }
}

class InternationalEvent {
    constructor(baseEvent) {
        this.name = `International ${baseEvent.name}`;
        this.requiredExperience = baseEvent.requiredExperience + 4;
    }
}

module.exports = { Event, InterDisciplinaryEvent, InternationalEvent };
