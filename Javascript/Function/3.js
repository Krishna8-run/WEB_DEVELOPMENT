let input = prompt("Enter a string:");
function countvowels(str) {
    let count=0;
    for(const char of str) {
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u") {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels in the string is:",countvowels(input));