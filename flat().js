// flat() method
// reduces the dimension by 1 of an array -- 2D -> 1D // 3D -> 2D
// it is NOT an in-place method

let arr = [1,2,[3,4,[5,6,[7,8]]],9];
// arr.flat();
console.log(arr.flat().flat().flat());