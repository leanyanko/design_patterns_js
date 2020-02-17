var Logger = require('./Logger');
var Shopper = require('./Shopper');
 var Store = require('./Store');

var logger = new Logger().getInstance();
logger.log('starting');

var alex = new Shopper('alex');
var shop = new Store('ski');
logger.log('finished');
console.log(`${logger.count}`);
