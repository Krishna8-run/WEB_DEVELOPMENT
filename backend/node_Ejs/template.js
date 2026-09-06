const express=require("express");
const path=require("path");
const app=express();
const port=8005;

app.set("view engine", "ejs" );
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");// home.ejs file is in views folder
});//home is also valid instead of home.ejs
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

