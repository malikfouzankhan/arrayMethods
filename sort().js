// sort() method
// sorts elements in a certain order
// NOTE : it is an in-place method which means it can change the original array

let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.sort()); // sorts the array according to lexicographical order


console.log(arr.sort((a,b) => b - a)); // (a-b) for ascending and (b-a) for descending


// arr.sort((a,b) => b - a);
// console.log(arr);