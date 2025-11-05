// reduceRight() method
// does the same job like reduce() method but from back of the array

let arr = ["H","E","L","L","O"];
console.log(arr.reduceRight((acc,cur) => {
    return acc + cur;
}, ""));