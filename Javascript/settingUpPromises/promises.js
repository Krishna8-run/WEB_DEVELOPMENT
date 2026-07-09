// function saveToDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveToDb( "apna college",
//     ()=>{ console.log("success: your data was saved");
//         saveToDb("2nd_data",()=>{ console.log("data2 saved");
//             saveToDb("data3",()=>{console.log("data3 was saved");},
//             ()=>
//              console.log("data3 failed network slow!"));
//         },
//         ()=>
//         console.log("data2 failed network slow!"));
//     },
//     ()=>{
//         console.log("failure: network slow!");
//     }
// );



function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if (internetSpeed>4){
            resolve("success: data was saved");
        }
        else{
            reject("failure: weak connection");
        }
    });
}
saveToDb("krishnasah");
