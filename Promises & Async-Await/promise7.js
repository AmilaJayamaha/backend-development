const fs = require('fs');
const util = require('util');

//without promises
fs.readFile('customers1.txt', (err, data1) => {
    fs.readFile('customers2.txt', (err, data2) => {
        fs.readFile('customers3.txt', (err, data3) => {
            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
        });
    });
});

//with promises
var read = util.promisify(fs.readFile);
Promise.all([
    read('customers1.txt'),
    read('customers2.txt'),
    read('customers3.txt')
])
    .then(data => {
        const [data1, data2, data3] = data;

        console.log(data1.toString());
        console.log(data2.toString());
        console.log(data3.toString());
    })
    .catch(err => {
        console.log(err);
    });