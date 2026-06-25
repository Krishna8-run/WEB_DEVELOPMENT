let arr=[6,3,7,1,9,4,6,];
const output=arr.reduce((previous,current) => {
    return previous>current? previous:current;
});
console.log(output);