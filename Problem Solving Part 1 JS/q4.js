/*
Question 4 Remove Duplicates from an Array
Goal:
Write a function that removes repeated values from an array.
*/

function removeDuplicates(input){
    const visit=[]
    for(let i=0;i<input.length;i++){
        if(visit.indexOf(input[i])==-1){
            visit.push(input[i]);
        }
    }

    return visit;
}

const array=[1,2,2,3,4,4,5]
console.log(removeDuplicates(array));