let price=[250,645,300,900,50];
let newprice=[];
for(let i=0;i<price.length;i++){
    newprice[i]=price[i]-(10/100)*price[i];
}
for(let i=0;i<price.length;i++){
    console.log(newprice[i]);
}