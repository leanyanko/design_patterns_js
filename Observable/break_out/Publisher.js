class Publisher {
    constructor(name) {
        this.name = name;
        this.editions = [];
        this.observers = [];
        this.magazines = [];
    }

    add(magazine) {
        this.magazines.push(magazine);
        this.observers.forEach(observer => {
            observer.notify("publisher", magazine, this.name);
        })
    }

    notify(magazine, reason) {
        this.editions.push({magazine, reason});
    }

    subscribe(observer) {
        this.observers.push(observer);
    }
}

module.exports = Publisher;
