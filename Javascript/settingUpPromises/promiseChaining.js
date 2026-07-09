function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        console.log(internetSpeed);
        if(internetSpeed>4){
            resolve("success : data was saved");
        }
        else{
            reject("failed: weak connection");
        }
    })
    
}
  
savetoDb("data1")
.then((result)=>{
    console.log("data1 saved.");
    console.log("result of promise:",result);
    return savetoDb("data2");
 })
.then((result)=>{
        console.log("data2  saved.");
        console.log("result of promise:",result);
        return savetoDb("data3");
})
.then((result)=>{
        console.log("result of promise:",result);
        console.log("data3  saved.");
})
.catch((error)=>{
    console.log("data failed!");
    console.log("error of promise:",error);
})