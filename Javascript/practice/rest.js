function sum(...arr){
    //arguments
    for(let i=0;i<arr.length;i++){
        console.log("you gave us: ",arr[i]);
    }
}
console.log(sum(1,2,0,8,12,-8,9,-8));

function sum1(...array){
    return array.reduce((sum1,element)=>sum1+element);
}
console.log(sum1(1425,1));

function minimun(Message,...argument){
    console.log(Message);
    return argument.reduce((minimum,element)=>{
        if(minimum>element){
            return element;
        }
        else{
            return minimum;
        }
    });
}
console.log(minimun("hello",3,2,7,5,1,12,-12));