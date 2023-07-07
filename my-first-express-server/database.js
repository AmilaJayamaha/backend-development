var sqlite3 = require("sqlite3").verbose();

const DBSOURSE = "db.sqlite";

let db = new sqlite3.Database(DBSOURSE, (err) => {
    if(err){
        console.error(err.message);
        throw err;
    } else{
        console.log("Connected to the SQlite database");
    }
});

module.exports = db;