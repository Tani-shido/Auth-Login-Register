const express = require("express");
const app = express();

app.put("/", (req,res)=>{
    const userName = req.body.username;
    const password = req.body.password;

    
})