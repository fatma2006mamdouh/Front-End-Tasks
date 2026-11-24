/*
Question 8 Check if All Array Elements Are Unique
Goal:
Determine whether an array contains duplicate elements.
*/


const Input1 =[1,2,3,4];
const Input2= [1, 2, 2, 3] 
function checkIfAllElementsAreUnique(Input){

    const n=Input.length
    const visit=[]
    for(let i=0;i<n;i++){
        if(visit.indexOf(Input[i])==-1){
            visit.push(Input[i])
        }else{
            return false;
        }
    }

    return true;
}

console.log(checkIfAllElementsAreUnique(Input1))
console.log(checkIfAllElementsAreUnique(Input2))
