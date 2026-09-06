let n=5;
 for (let i=1;i<n;i++){
    console.log("hello to", i);
 }

 let args=process.argv;
for(let i=2;i<args.length;i++){
    console.log("hello to ",args[i]);
}

const math=require('./math.js');
console.log("sum is ", math.sum);
console.log("difference is ", math.difference);
console.log("product is ", math.product);
console.log("quotient is ", math.quotient);
console.log("pi is ", math.pi);