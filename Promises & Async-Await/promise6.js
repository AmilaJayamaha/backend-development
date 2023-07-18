const fs = require('fs');
const util = require('util');

//without promises
fs.readFile('customers1.txt', (err, data) => {
    console.log(data.toString());
});

//with promises
var read = util.promisify(fs.readFile);
read('customers1.txt')
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => {
        console.log(err);
    });