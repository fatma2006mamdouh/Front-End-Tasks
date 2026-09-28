/*
Question 2 Find the Largest Number in an Array
Goal:
Return the biggest number in a list of numbers.
*/


const findTheLargestNumber=function(input){

    let mx=input[0];
    const N=input.length;

    for(let i=1;i<N;i++){
        if(input[i]>mx){
            mx=input[i];
        }
    }

    return mx;
}

const arr=[2,8,5,3];

const largestNumber=findTheLargestNumber(arr);
console.log(largestNumber);