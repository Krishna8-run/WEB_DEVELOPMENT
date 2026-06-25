let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let randomColor=getRandomColor();
    h1.innerText=randomColor;
    h1.style.color=randomColor;

    let p=document.querySelector("p");
    p.style.backgroundColor=randomColor;

    console.log("color updated");
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*20);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}