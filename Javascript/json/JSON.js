let jsondata=`{"fact":"snake do not eat milk."}`;
let jsonobject=JSON.parse(jsondata);
console.log(jsonobject.fact);

let student={
    name:"krishna",
    marks:55
}
let jsondata1=JSON.stringify(student);
console.log(jsondata1);