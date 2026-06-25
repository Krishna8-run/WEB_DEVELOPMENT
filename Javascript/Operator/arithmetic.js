let a=parseFloat(prompt("enter a number"));
let b=parseFloat(prompt("enter second number"));
 
console.log("sum of a and b is:",a+b);
console.log("subtraction of a and b is:",a-b);
console.log("multiplication of a and b is:",a*b);
console.log("division of a and b is:",a/b);
console.log("modulus of a and b is:",a%b);
//OR
let c = prompt("Enter a number:");
let d = prompt("Enter second number:");

if (isNaN(c) || isNaN(d)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  console.log("Sum of a and b is:", c+d);
  console.log("Subtraction of a and b is:", c- d);
  console.log("Multiplication of a and b is:", c * d);
  console.log("Division of a and b is:", d !== 0 ? c / d : "Cannot divide by zero");
  console.log("Modulus of a and b is:", d !== 0 ? c % d : "Cannot mod by zero");
  console.log("Exponential of a and b is:", c ** d);
}