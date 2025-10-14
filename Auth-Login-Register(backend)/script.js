const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const JWT_SECRET_KEY = "MySecret";
dotenv.config();
const mongoose  = require("mongoose");
const { UserModel } = require("./db");

const connectDB = async function (){
    try{
        await mongoose.connect("MONGO_URL");
        console.log("DB connected");
    }catch(e){
        console.error(err.message);
    }
}
connectDB();



app.post("/SignUp", async (req,res) =>{
    try{
        const userName = req.body.username;
        const password = req.body.password;

        console.log("User name & password (before validation): ", userName, password);
// User Name validation
        if(/^[A-Za-z]+$/.test(userName) === false){
            res.json({
                message: "Name can't be empty and must contain only alphabets"
            });
        }
        else{
// Password validation
            if(password.length < 5){
                res.json({
                    message: "Password must contain more than 5 characters"
                });
            }
            else{
                console.log("User Name & password (after validation): ", userName, password);
                try{
                    const value = await UserModel.create({
                        username: userName,
                        password:  password
                    });

                    const token = jwt.sign({userName, password}, JWT_SECRET_KEY);
                    console.log(token);

                    return res.json({
                        message: "Details recieved and saved in DB",
                        token
                    });
                }
                catch(error){
                    console.log("Details not saved in DB");
                }
            }
        }
    }
    catch (error){
        console.log("Details not recieved");
    }
});

app.get("/LogIn", async (req, res)=>{
    try{
        const userName = req.body.username;
        const password = req.body.password;
        const tokenVal = req.headers.token
// User Name validation
        if(/^[A-Za-z]+$/.test(userName) === false){
            res.json({
                message: "Name can't be empty and must contain only alphabets"
            });
        }
        else{
// Password validation
            if(password.length < 5){
                res.json({
                    message: "Password must contain more than 5 characters"
                });
            }
            else{
                console.log("User Name & password (after validation) FOR LOGIN: ", userName, password);
                try{
                    const decodedToken = jwt.verify(tokenVal, JWT_SECRET_KEY);
                    console.log(decodedToken);
                    if(decodedToken.userName === userName){
                        if(decodedToken.password === password){
                            console.log("User found");
                            res.json({
                                message: "You are Logged In"
                            });
                        }
                        else{
                            console.log("Token not found");
                            res.json({
                                message: "Token is wrong"
                            });    
                        }
                    }
                    else{
                        console.log("User not found");
                        res.json({
                            message: "Credentials are wrong"
                        });
                    }
                }
                catch(e){
                    console.log("error");
                }
            }
        }
    }
    catch(e){
        res.json({
            message: "Details not recieved"
        });
    }
});

app.listen(port, ()=>{
    console.log(`Server is runnig on http://localhost:${port}`)
});

