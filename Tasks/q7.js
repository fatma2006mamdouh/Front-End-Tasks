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