// reduce() method
// runs a function on every element of the array and returns only a single value by accumulating all the operations

let arr = ["H","E","L","L","O"];
console.log(arr.reduce((acc,cur) => {
    return acc + cur;
}, ""));