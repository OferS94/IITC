const express = require('express');

const app = express();

app.get("/" , (req , res )=> {
    res.send("hello world!")
})

app.get('/user' , () => {
    res.send({
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    })
})

app.listen(PORT , () => {
    console.log('server running at .....')
})