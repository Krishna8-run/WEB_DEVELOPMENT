const express=require("express");
const app=express();
let port=8000;

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});
app.use((req,res)=>{
    console.log("Request received");
    console.log("Request received1");
    let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
    res.send(code);
}); 
       