const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cors = require("cors")

const saltRound=10;
const arr=[];
app.use(express.json())

app.use(cors({origin:"*"}))

app.get("/",(req,res)=>{
    res.send("Working ")
})

app.post("/register",async (req,res)=>{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password
  const hashpassword =  await bcrypt.hash(password,saltRound)
  const obj={
      name:name,
      email:email,
      password:hashpassword
    }
    arr.push(obj)
    res.send(arr)
})

app.post("/login",(req,res)=>{
    const details=req.body;
    try {
        arr.forEach(async(data)=>{
            console.log(data)
            const validate=await bcrypt.compare(req.body.password,data.password)
            if(!validate){
                res.send("Wrong password")
            }else{
                jwt.sign(details,"secretkey",(error,token)=>{
                    res.status(200).send(token)
                })
            }
        })
    }
    catch (error) {
        console.log(error.message="error:",error)
    }
})

app.listen(5050,()=>{
    console.log("Port: 5050 Working");
})