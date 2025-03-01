const express = require('express');
const app = express();
app.use(express.json);
const user = require("./routes/user");
require('dotenv'.configs);
const PORT = process.env.PORT ;
app.get("/",(req,res)=>{
    res.send("This test route");
})
app.use("/user",UserRoute);
app.listen(PORT,(req,res)=>{
   connectTODb();
   console.log("Server Started");
})