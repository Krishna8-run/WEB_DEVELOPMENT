let gameSeq=[];
let userSeq=[];
let btns=["btn1","btn2","btn3","btn4"];

let started=false;
let level=0;
let score=0;

let h3=document.querySelector("h3");
let h2=document.querySelector("h2");

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
    randB.classList.add("userflash");
    setTimeout(function(){
        randB.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`#${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        score++;
            h2.innerText=`Score:${score}`;

        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over!<b>
                       <br>
                      Press any key to start.`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="rgb(121,117,117)";
            },150);
            reset();
        
    }
}
function btnPress(){
   let btn=this;
   userFlash(btn);
  let userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);


}

let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
        btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    score=0;
}


