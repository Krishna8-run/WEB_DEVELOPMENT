//callback hell
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