let n=prompt("Enter a number of arrays:");
let arr=[];
for(let i=0;i<n;i++)
{
   let num= arr[i]=prompt("Enter a number:");
   arr[i]=Number(num);// Convert string to number
}
console.log("Entered number is ",arr);

let product=arr.reduce((accumalator,value) => {
    return accumalator*value;
});
console.log('product is ',product);