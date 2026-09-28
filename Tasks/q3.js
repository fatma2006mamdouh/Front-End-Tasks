/*
Question 3 Count Vowels in a String
Goal:
Write a function that counts how many vowels (a, e, i, o, u) appear in a given string.
*/
const isVowel=(char)=>{
    return(char=='a' || char=='e'||char=='i' || char=='o'||char=='u');
}
const countVowels=(input)=>{
    
    let count=0;
    for(let i=0;i<input.length;i++){
        (isVowel(input[i])?count++:count);
    }

    return count;
}


const countOfVowels=countVowels("banana");
console.log(countOfVowels);