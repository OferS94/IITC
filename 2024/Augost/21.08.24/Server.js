const express = require("express");
const app = express();

const contactId = {
    email: "ofersela94@gmail.com" ,
    phone: "0546975202",
}

const products = [
    {id: 1 , name: "chicken" , price: 100 },
    {id: 2 , name: "cow" , price: 2000 },
    {id: 3 , name: "pig" , price: 5000}
];
  
app.get("/about", (req, res) => {
    res.send("this server was created by omer");
  });


  app.get("/contact", (req, res) => {
    res.json(contactId);
  });

  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/products/:id", (req, res) => {
    const proID = req.params.proID;
    let product = null;
    for (let i = 0 ; i< products.length ; i++){
        if (products[i] === proID) product = products[i];
    }
    if (product === null) res.send("product not found");
    else res.json(product);
  });

  app.get("/", (req, res) => {
    res.send("Welcome to my basic Express server");
  });

  app.get("*", (req, res) => {
    res.send("oopsie whoopsie youve made a messy wessy");
  });


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });