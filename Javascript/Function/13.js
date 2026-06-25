let arr=[1,2,3,4,5,6];
let evenArr=arr.filter((val) => {
    return val%2===0;
    // return val>3;
});
console.log(evenArr);