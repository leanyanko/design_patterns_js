class Magazine {
    constructor(name) {
        this.name = name;
    }

    publish(reason) {
        console.log(`${reason} from ${this.name} was just published`);
    }
}

module.exports = Magazine;
