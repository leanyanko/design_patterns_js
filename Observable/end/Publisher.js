class Publisher {
    constructor() {
        this.editions = [];
    }

    notify(magazine, reason) {
        this.editions.push({magazine, reason});
    }
}

module.exports = Publisher;
