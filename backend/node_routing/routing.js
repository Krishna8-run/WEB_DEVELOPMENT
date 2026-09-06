const express1=require("express");
const app=express1();
let port=8001;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path.");
});

app.get("/banana",(req,res)=>{
    console.log(req.url);
    res.send("you contacted banana path.");
})

app.get("/orange",(req,res)=>{
    console.log(req.url);
    res.send("you contacted orange path.");
});


app.get("/*splat",(req,res)=>{
    res.send("you contacted wrong path.");
});
app.post("/try",(req,res)=>{
    console.log(req.url);
    res.send("you contacted try path12433.");
});



