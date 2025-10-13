const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const jwt = require("jsonwebtoken");
const JWT_SECRET = "MY_SECRET_KEY";

const mongoose  = require("mongoose");
const { UserModel } = require("./db");

const connectDB = async function (){
    try{
        await mongoose.connect("mongodb+srv://shikaridota777:ZClPvfWjJINgzaFN@cluster0.12wqhve.mongodb.net/Auth-Login");
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
                    return res.json({
                        message: "Details recieved and saved in DB",
                        value
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
                const findDetails = await UserModel.findOne({
                    username: userName,
                    password: password
                });
                if(!findDetails){
                    console.log("User not found");
                    res.json({
                        message: "Credentials are wrong"
                    });
                }
                else{
                    console.log("User found");
                    res.json({
                    message: "You are Logged In"
                    });
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

