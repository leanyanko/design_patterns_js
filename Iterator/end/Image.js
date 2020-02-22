class Image {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }

    show() {
        console.log(`An image ${name} from ${date} is loading...`);
    }
}

module.exports = Image;
