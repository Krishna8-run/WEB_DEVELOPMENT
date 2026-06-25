let array=[1,2,3];
let sum=( squareArray=array.map((value)=>{
    return value*value;
})).reduce((result,current)=>{
    return (result+current);
}); 

console.log(squareArray);
console.log(sum/array.length);
console.log(array.length);