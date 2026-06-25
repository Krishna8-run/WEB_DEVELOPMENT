const student={
    name:"krishna",
    marks:78,
    prop:this,
    getName:function(){
        console.log(this);
        return this.name;
    },

    fetMarks:()=>{
        console.log(this);
        return this.marks;
    },

    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);
        },2000);
    },

    getInfo2:function(){
        setTimeout(function(){
            console.log(this);
        },3000);
    }
}
let n=5;
square=(n)=>{
    return n*n;
}
console.log(square(n));

let i=setInterval(()=>{
    console.log("hello world!");
},2000);
console.log(i);
setTimeout(()=>{
    clearInterval(i);
},12000);