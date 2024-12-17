const jokesRoutes = require("./routes/jokeRoutes");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = 3000;
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to database");
});
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/jokes", jokesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
