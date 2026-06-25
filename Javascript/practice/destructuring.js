let names=["stark","tony","bruce","steve","peter","ram"];
let [winner,runnerUp,...array]=names;
console.log(runnerUp);
console.log(winner);
console.log(array);

//object destructuring
const student={
    name:"krishna",
    class:9,
    age:14,
    subjects:["hindi","english","math","science"],
    username:"krishna123",
    password:1234,
    city:"jnk",//high priority
};
const{username:user,password:pass,city="mumbai "}=student;
console.log(user);
console.log(student.username);
console.log(student.age);
console.log(city);