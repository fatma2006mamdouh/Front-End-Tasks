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