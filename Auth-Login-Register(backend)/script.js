const express = require("express");
const app = express();

app.put("/", (req,res)=>{
    const userName = req.body.username;
    const password = req.body.password;  
});

app.post("/", (req, res) => {
    const userName = req.body.username;
    
});
app.get("/", (req, res) => {
    const userName = req.body.username;  
    
});
app.delete("/", (req, res) => {
    const userName = req.body.username;  
    
});
