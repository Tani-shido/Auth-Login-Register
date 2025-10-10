const express = require("express");
const mongoose  = require("mongoose");
const { UserModel } = require("./db.js");
app.use(express.json());
const port = 3000;

mongoose.connect(MONGO_URL);
const mongoose  = require("mongoose");
const { UserModel } = require("./db.js");
app.use(express.json());

mongoose.connect(MONGO_URL);

app.post("/Signin", (req,res)=>{
    const userName = req.body.username;
    console.log("User Name: ", userName);

    const password = req.body.password;
    console.log("User password: ", password);

    if(userName === '' && password.length < 9){
        res.json({
            message: "Incorrect Details"
        });
    }
    else{

        res.json({
            message: "Details recieved",
            userName, password
        });
    }
});

app.post("/Login", (req, res)=>{
    const userName = req.body.username;
    console.log("User Name: ", userName);

    const password = req.body.password;
    console.log("User password: ", password);

    res.json({
        message: "You are Logged In",
        userName, password
    });
});


app.listen(port, ()=>{
    console.log(`Server is runnig on http://localhost:${port}`)
});

