const express = require('express');
const app = express();

const path = require("path");

app.use(express.static('public'));

apapp.listen(procces.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"));
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"));
})