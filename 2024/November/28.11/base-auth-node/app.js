const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 3000;
const saltRounds = 10;
app.use(express.json());
const dummyUser = {};
const hashKey = "4u1UIQfSCJ9y0ayaHauWTxrhz86cKbUMEQq3A4t8GBZzO9";

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello from the server!",
  });
});

app.post("/sign-up", async (req, res) => {
    try{
  const { email , password } = req.body;
  // console.log(userPassword);
  const hashedPassword = await bcrypt.hash(password + hashKey, saltRounds);

  dummyUser.email = email;
  dummyUser.password = hashedPassword;

  return res.send({
    you: dummyUser,
        });

    } catch (error){
        res.status(500).send(error)
    }
});

app.post('/sign-in' , async (req , res ) => {
    try{
        const {email , password} = req.body;

        if(dummyUser.email !== email) {
          return  res.status(401).send("no such user")
        }

        const isCorrectPassword = await bcrypt.compare(
            password + hashKey,
             dummyUser.password
            );

        if(isCorrectPassword) {
            return res.status(200).send({
                status: "success",
                message: "welcome",
                data: dummyUser.email
            });
        }else {
            return res.status(401).send({
                error: "error",
            });
        }

    } catch(error){
        res.status(500).send(error)
    }
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


// app.post("/encrypt-password", async (req, res) => {
//     try{
//   const { userPassword } = req.body;
//   // console.log(userPassword);
//   const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

//   return res.send({
//     hashedPassword,
//         });
        
//     } catch (error){
//         res.status(500).send(error)
//     }
// });