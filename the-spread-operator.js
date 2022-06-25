/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3]
let arr2 = arr1;
arr2.push(4)
console.log(arr1, arr2);

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log(arr3, arr4);

// Copying an object

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5 };
console.log(obj1, obj2, obj3);

// Copying only part of an array/object

let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5);
