// const {add , sub , multi , divi} = require('./maths.js');

// console.log("hello world");
// console.log(add(1 , 2 ));
// console.log(multi ( 1 , 2 ));
// console.log(sub( 1 , 2 ));
// console.log(divi( 4 , 2));

const http = require('http');

const PORT = 3000;

const server = http.createServer(req , res) => {
    if(req.url ==='/' && req.method === "GET"){
        res.statuscode = 200;
        res.setheader('content-type' , 'text/plain');
        res.end("hellow world!")
    } else if (req.url === '/user' && req.method === "get"){
        res.statuscode = 200;
        res.setheader('content-type' , 'application/json');
        res.end(JSON.stringify){
            name :'John doe',
            age : 30,
            email :

        }
    }
}


