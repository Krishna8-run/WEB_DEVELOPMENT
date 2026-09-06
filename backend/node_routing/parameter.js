let express=require("express");
let app=express();
let port=8002;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
app.get("/orange",(req,res)=>{
    console.log(req.url);
    res.send("you contacted orange path.");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlStr=`<h1> Welcome to the page of @${username}@${id}</h1>`;
    res.send(htmlStr);
});