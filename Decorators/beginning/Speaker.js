class Speaker {
    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
        this.events = [];
    }

    speak(event) {
        if(event.requiredExperience > this.experience)
            console.log(`${this.name} does not have enough experience to speak at ${event.name}`);
        else {
            console.log(`${this.name} is speaking at the ${event.name}`);
            this.experience += event.requiredExperience;
            this.events.push(event);
        }
    }

    printStatus() {
        console.log(`${this.name} spoke at ${this.events.length} events: `);
        this.events.forEach(event => {
            console.log(`  * ${event.name}`);
        })
        console.log(`this speaker has ${this.experience} level of experience`);
    }
}

module.exports = Speaker;
