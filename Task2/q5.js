// Memo

const heavyCompute = (a, b) => {
  return a + b;
};

const argToResults = new Map();

const memo = (arg) => {
  if (argToResults.has(arg)) return argToResults.get(arg);

  const result = heavyCompute(arg[0], arg[1]);

  argToResults.set(arg, result);

  return result;
};

console.log(memo([2, 3]));
console.log(memo([2, 3]));
