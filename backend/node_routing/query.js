let express=require("express");
let app=express();
let port=8003;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("No search query provided.");
    }
    res.send(`You searched for: ${q}`);
});

app.get("/*splat",(req,res)=>{
    res.send(`You accessed the wrong path: ${req.url}`);
});