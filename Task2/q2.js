// Check if All Array Elements Are Unique

let arr_1 = [1, 2, 3, 4];
let arr_2 = [1, 2, 2, 4];

const hasDub = (arr) => {
  let ret = [];
  let flag = true;
  for (el of arr) {
    if (!ret.includes(el)) {
      ret.push(el);
    } else {
      flag = false;
      break;
    }
  }

  return flag;
};

console.log(hasDub(arr_1));
console.log(hasDub(arr_2));

///////////another Solution using set//////////////

const isUnique = (arr) => {
  return new Set(arr).size != arr.length;
};

console.log(isUnique(arr_1));
console.log(isUnique(arr_2));


