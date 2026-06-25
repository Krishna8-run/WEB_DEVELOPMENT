let para=document.createElement("p");
para.innerText="Hey I'm red!";
document.querySelector('body').append(para);
para.classList.add("red_class");

let heading=document.createElement("h3");
heading.innerText="I'm blue h3!";
document.querySelector('body').append(heading);
heading.classList.add("blueClass");

let division=document.createElement("div");
let heading2=document.createElement("h1");
let para2=document.createElement("p");
heading2.innerText="I'm in a div";
para2.innerText="Me Too!";
division.append(heading2);
division.append(para2);
document.querySelector('body').append(division);//prepend to keep the box above
division.classList.add("box");
division.style.marginBottom="20px";

//"Create a new input and button element on the page using JavaScript only. Set the text of the button to 'Click me'."
let button1=document.createElement("button");
button1.innerText="Click Me!";
button1.classList.add("buttonClass");
document.body.append(button1);
button1.style.display="block";
button1.style.marginBottom="20px";

let input=document.createElement("input");
input.placeholder="Enter your name:";
input.classList.add("inputClass");
document.querySelector('body').append(input);

/* Add the following attributes to the elements using JavaScript:
   Input Field: Change the placeholder value of the input to "username".
   Button: Change the id of the button to "btn".*/
button1.setAttribute("id","btn");
input.setAttribute("placeholder","username");






