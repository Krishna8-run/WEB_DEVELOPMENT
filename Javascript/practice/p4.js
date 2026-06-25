const doubleAndReturnArgs=(array,...argument)=>
     [array,
     argument.map((v)=>v*2)];
console.log(doubleAndReturnArgs([2,3,5,1,6,87],3,8,6));