const express = require('express');
const port = 3000;

const app = express()

app.get("/", (req,res) =>{
    res.type("text/plain");
    res.send("Hello Express")
})




app.listen(port,()=>{
    console.log("Servidor iniciado");
});

