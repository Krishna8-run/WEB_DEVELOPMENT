// //callback hell
// h2=document.querySelector("h2");
// function changeColor(color1,delay,nextColorChange){
//     setTimeout(()=>{
//         h2.style.color=color1;
//         if(nextColorChange){
//             nextColorChange();
//         }
//     },delay);

// }

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("purple",1000,()=>{
//             changeColor("orange",1000);
//         });
//     });
// });


//callback hell solution:promises
h2=document.querySelector("h2");
function changeColor(color1,delay){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        h2.style.color=color1;
        resolve("color changed");
      },delay);
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("pink",5000);
})
.then(()=>{
    console.log("purple color was completed");
})
.catch(()=>{
    console.log("color failed to change!");
})

