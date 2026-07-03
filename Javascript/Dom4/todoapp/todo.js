let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    item.appendChild(delBtn);
    ul.appendChild(item);

    input.value = "";

    delBtn.addEventListener("click", function () {
        ul.removeChild(item);
    });

});
 let delBtns=document.querySelectorAll(".delete");
 for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
    })
 }