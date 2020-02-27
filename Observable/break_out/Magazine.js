class Magazine {
    constructor(name, publisher) {
        this.name = name;
        this.subscribers = [];
        publisher.add(this);
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    publish(reason) { //reason = "special" or month
        // console.log(`${reason} from ${this.name} was just published`);
        this.subscribers.forEach( subscriber => subscriber.notify("magazine", this.name, reason));
    }
}

module.exports = Magazine;
