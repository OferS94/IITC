const express = require('express')
const app = express()
// const PORT = 3000;


app.get("/", (req , res) => {
    res.send("hello world");
});

app.listen(3000 , () => {
    console.log("server is running on port 3000")
});
