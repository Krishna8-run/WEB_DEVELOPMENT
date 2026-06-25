let array=[2,8,9,10,-2,8,6];
let result=array.reduce((min,element)=>{
    if(min<element)
        return min;
    else
        return element;
});
console.log(result);