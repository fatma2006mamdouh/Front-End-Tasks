Input= [
  { type: 'fruit' },
  { type: 'vegetable' },
  { type: 'fruit' }
]
const freq = Input.reduce((acc, obj) => {
    const key = obj.type;
    acc[key] = (acc[key] || 0), 1;

    return acc;
}, {});

console.log(freq);
