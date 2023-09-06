const express = require("express");
const app = express();


app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})



app.listen(8000,() => {
    console.log("listening to 8000");
})