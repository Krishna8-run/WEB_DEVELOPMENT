/*1. try out the following events in Event Listener on your own:
  -mouseout
  -keypress
  -Scroll
  -load

  2.create a button on the page using javascript.Add event listener to the button that changes the button's color to green when it is clicked.
*/

let p=document.querySelector("p");

p.addEventListener("mouseout",function(event){
    this.style.color="red";
    console.log("mouse out event triggered");
})

let input=document.querySelector("input");
input.addEventListener("keypress",function(event){
    this.style.color="blue";
    console.log("key pressed");
})

window.addEventListener("scroll",function(){
    let h3=document.querySelector("h3");
    h3.style.color="purple";
    console.log("scroll event triggered");
})

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    this.style.color="green";
})

let photo=document.querySelector("img");
 if(photo.complete){
        console.log("image already loaded.");
    }
    else{
    console.log("load event triggered");
    }
photo.addEventListener("load",function(){
   
})