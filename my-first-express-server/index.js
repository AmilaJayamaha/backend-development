const Express = require("express");
const app =  Express();

app.get("/hello",(req, res)=>{
    res("Hello World");
});

app.listen(3000);