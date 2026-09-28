/*
Question 10 Find Missing Number in a Range
Goal: 
Given an array of numbers from 1 to n with one missing, find it.
*/

const array1 = [1, 2, 4, 5, 6]
const n=6;

for(let i=1;i<=n;i++){
    if(array1.indexOf(i)==-1){
        console.log(i);
    }
}
