let choice;
let array=[2,3,4,6,7,9];
choice=prompt("please enter your choice: ");
while(true){
    if(choice=="delete"){
        array.pop();
        break;
    }
    
    else if(choice="quit"){
        console.log("quiting app...")
        return 0;
    }

    else if(choice="add"){
        let newdata = prompt("please enter the data: ");
        array.push(newdata);
    }
}