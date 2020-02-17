class Item {
    Item() {
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Item();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

var singleton = new Singleton();

var instance1 = singleton.getInstance();
var instance2 = singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));
