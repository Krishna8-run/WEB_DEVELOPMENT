let gameSeq=[];
let userSeq=[];
let btns=["btn1","btn2","btn3","btn4"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});
function gameFlash(randB){
    randB.classList.add("flash");
    setTimeout(function(){
        randB.classList.remove("flash");
    },250);
}
function userFlash(randB){
    randB.classList.add("userFlash");
    setTimeout(function(){
        randB.classList.remove("userFlash");
    },250);
}

function levelUp(){
    level++;
    h3.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`#${randColor}`);
    console.log(randIndx);
    console.log(randColor);
    console.log(randBtn);
    gameFlash(randBtn);
}
function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
}

let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
