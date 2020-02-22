var Image = require('./Image');
require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('press arrow');

var album = [
    new Image("first", "02/01"),
    new Image("second", "02/01"),
    new Image("third", "02/04"),
    new Image("forth", "02/06"),
    new Image("fith", "02/11"),
];

process.stdin.on('keypress', (str, key) => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0);
    switch(key.name){
        case 'right':
            process.stdout.write('right');
            break
        case 'left':
            process.stdout.write('left');
            break
        case 'c':
            if(key.ctrl)
                process.exit();
    }
})
