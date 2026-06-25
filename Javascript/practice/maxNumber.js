let array=[5,8,2,0,4,15,9,-1];
let result=array.reduce((max,element)=>{
    if(element>max)
        return element;
    else
        return max;
});
console.log(result);