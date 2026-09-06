const url="https://icanhazdadjoke.com/";
let para=document.querySelector("p");

async function getJokes(){
    try{
        const config ={headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
        console.log(res.data);
                console.log(res.data.joke);//joke is built in object
        para.innerText=res.data.joke;
    }
    catch(err){
        console.log("error:",err);
    }
}
getJokes();