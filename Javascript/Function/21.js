let n=prompt("Enter a number :");
let arr=[];
for(let i=0;i<n;i++)
{
   arr[i]=i+1;
}
console.log("array is ",arr);

let sum=arr.reduce((accumalator,value) => {
    return accumalator+value;
});
let product=arr.reduce((accumulator,value) => {
    return accumulator*value;
});

console.log('sum is ',sum);
console.log("product is",product);