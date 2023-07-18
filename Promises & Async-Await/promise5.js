const fs = require('fs');

console.log("ABC");

//without promises
fs.readFile('customers1.txt', (err, data) => {
    console.log(data.toString());
});

console.log("XYZ");

//with promises
new Promise((resolve, reject) => {
    fs.readFile('customers1.txt', (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
    });
})
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => {
        console.log(err);
    });