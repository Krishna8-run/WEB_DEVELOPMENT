let headings=document.getElementsByClassName("heading_class");
console.dir(headings);
console.log(headings);
let heading=document.getElementsByClassName("heading");
console.log(heading)
let heading1=document.getElementById("heading");
console.dir(heading1);
let para=document.getElementsByTagName("p");
console.dir(para);
let firstEl=document.querySelector("p");
console.dir(firstEl);
let firstid=document.querySelector("#my_id");//# is required otherwise it gives null
console.dir(firstid);
let firstclass=document.querySelector(".heading_class");//. is required otherwise it gives null
console.dir(firstclass);