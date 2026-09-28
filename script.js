
//////////////////////////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////

// /*
// Question 5 Count Occurrences of Each Word in a String
// Goal:
// Find how many times each word appears in a sentence.
// */

const input1= "apple banana apple orange banana apple"

const words = input1.split(" ");
const frequencyObj = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(frequencyObj);



//////////////////////////////////////////////////////////////////////////////

/*
Question 6 Find Intersection of Two Arrays
Goal:
Return a new array that contains only the elements that exist in both arrays.
*/
function findIntersection(input_1,input_2){

    const ret=[];

    for(let i=0;i<input_1.length;i++){
        
        if(input_2.indexOf(input_1[i])!=-1){
            ret.unshift(input_1[i])
        }
    }

    return ret;
    
}
const input_1=[1, 2, 3, 4]
const input_2=[3, 4, 5, 6]
console.log(findIntersection(input_1,input_2));

//////////////////////////////////////////////////////////////////////////////

/*
Question 7 Group Objects by Property
Goal:
Count how many times each unique property value appears across an array of objects.
*/

const input= [
  { type: 'fruit' },
  { type: 'vegetable' },
  { type: 'fruit' }
]

const groupObjectsByProperty=input.reduce((acc,obj)=>{
    
    acc[obj.type]=( acc[obj.type] || 0)+1;

    return acc;
},{});

console.log(groupObjectsByProperty)

//////////////////////////////////////////////

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
//////////////////////////////////////////////////////
/*
Question 9 Create a Countdown Timer
Goal:
Create a timer that counts down from a given number of seconds to zero.
*/

const Input=5;

for(let i=Input;i>=0;i-- )
    console.log(i);

//////////////////////////////

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



