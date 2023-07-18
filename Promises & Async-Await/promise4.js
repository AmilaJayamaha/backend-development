Promise.resolve(null)
    .then(value => {
        throw "Error Occured";
        console.log(value);
        return "One";
    })
    .then(value => {
        console.log(value);
        return "Two";
    })
    .then(value => {
        console.log(value);
        return "Three";
    })
    .then(value => {
        console.log(value);
        return "Four";
    })
    .catch(error => {
        console.log(error);
    });