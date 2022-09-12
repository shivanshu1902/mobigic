const express = require("express")
const cors = require("cors")
const connect= require("./src/configs/db")
const userController = require("./src/controllers/user.controller")
const {register,login} = require("./src/controllers/auth.controller")
const fileController=require("./src/controllers/file.controller");

const app = express()
app.use(express.json())
app.use(cors())


app.post("/register", register)
app.post("/login", login)
app.use("/file",fileController)
app.listen(5000 , async()=>{
    try{
        await connect();
        console.log(`listening on port 5000`)
    }
    catch(err){
        console.log(err.message);
    }
})