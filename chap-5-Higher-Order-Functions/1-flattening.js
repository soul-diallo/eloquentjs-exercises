/*
Use the reduce method in combination with the concat method to "flatten" an array of array of arrays into a single array that has all the elements of the original arrays.
*/ 

const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const flattened = arr.reduce((acc, cur) => acc.concat(cur), []);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
