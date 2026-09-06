const express=require("express");
const path=require("path");
const app=express();
const port=8007;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/javascript")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/instagram/:username",(req,res)=>{
    const instaData=require("./data.json");
    const name=req.params.username;
    const data=instaData[name];
    console.log(data);
    if(data){
    res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})