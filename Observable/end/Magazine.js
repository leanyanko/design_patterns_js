class Magazine {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    publish(reason) { //reason = "special" or month
        // console.log(`${reason} from ${this.name} was just published`);
        this.subscribers.forEach( subscriber => subscriber.notify(this.name, reason));
    }
}

module.exports = Magazine;
