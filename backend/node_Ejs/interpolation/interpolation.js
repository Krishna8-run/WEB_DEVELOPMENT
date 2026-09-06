const express=require("express");
const path =require("path");
const app=express();
const port=8006;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
//name interpolation
app.get("/", (req,res)=>{
    res.render("interpolation2.ejs",{name:"Krishna"});
});
//dice value generation
app.get("/diceval",(req,res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{dice:dicevalue});
});

//instagram link interpolation
app.get("/ig/:username",(req,res)=>{
    let followers=["ram","shyam","hari","rakesh"];
    let username=req.params.username;
    res.render("instagram.ejs",{username,followers});
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
 });
