class Reader {
    constructor(name) {
        this.name = name;
    }

    notify(magazine, reason) {
        console.log(`Dear ${this.name}, there is a ${reason} edition from ${magazine} has been published`);
    }
}

module.exports = Reader;
