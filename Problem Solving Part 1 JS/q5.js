 /*
 Question 5 Count Occurrences of Each Word in a String
    Goal:
 Find how many times each word appears in a sentence.
 */

const input1= "apple banana apple orange banana apple"

const words = input1.split(" ");
const frequencyObj = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(frequencyObj);