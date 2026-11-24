
/*
Question 1 Reverse a String
Goal:
Write a function that takes a string and returns it reversed.
*/

function reverseString(input){
    let ret="";
    if(typeof input ==="string"){
        const N=input.length;

        for(let i=N-1;i>=0;i--){
            ret+=input[i];
        }

        console.log(ret);
    }else{
        console.log(`Maybe you Enter False Input ! Try again Enter Input as a String`)
    }
    
}

const word="hello";
reverseString(word);