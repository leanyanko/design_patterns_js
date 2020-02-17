var Logger = require('./Logger');
var logger = new Logger().getInstance();

class Shopper {
    constructor(name, money=0) {
        this.name = name;
        this.money = money;
        logger.log(`New shopper: ${name} has $${money}`);
    }
}

module.exports = Shopper;
