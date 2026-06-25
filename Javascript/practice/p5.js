const mergeObjects=()=>{
    let obj1={
        name:"hari",
        roll:12,
        age:23
    };
    let obj2={
      subject:"math",
        mark:45
    };
    return{...obj1,...obj2 };
};
console.log(mergeObjects());

const mergeObjects1=(obj3,obj4)=>({...obj3,...obj4})
console.log(mergeObjects1({a:1,b:5},{c:6,d:0}));
