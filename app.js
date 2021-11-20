const express = require('express')
const app = express()
const mongoose = require('mongoose')
const schema = require('./schema')
const url = 'mongodb+srv://titu:titu@cluster0.2vfvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url).then(()=>console.log("Database Connected..."))
app.use(express.json())

app.post('/add-new-record', async (req,res)=>{
    const myName = req.body.name;
    const myReg_no = req.body.reg_no;
    const myMarks = req.body.marks;

    try{
        const newData = new schema(
            {
                name: myName,
                reg_no: myReg_no,
                marks: myMarks
            }
        )
        const saveData = await newData.save()
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    res.send("Hello There")
})


app.listen(3000,()=>{
    console.log("Server is up and working...");
})