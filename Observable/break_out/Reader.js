class Reader {
    constructor(name) {
        this.name = name;
    }

    notify(magazine, reason) {
        console.log(`Dear ${this.name}, there is a ${reason} edition from ${magazine} has been published`);
    }

    notify(sender, magazine, name) {
        if (sender == "publisher")
        console.log(`Dear ${this.name}, there is a new magazine ${magazine.name} is available for subscription from ${name}`);
    }
}

module.exports = Reader;
