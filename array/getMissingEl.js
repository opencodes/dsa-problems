// Given an array of size N - 1 such that it only contains distinct integers in the range of 1 to N.Find the missing element.

// Example 1:
// Input:
// N = 5
// A[] = { 1, 2, 3, 5}
// Output: 4

// Example 2:
// Input:
// N = 10
// A[] = { 6, 1, 2, 8, 3, 4, 7, 10, 5}
// Output: 9

let arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];

function getMissingEl (arr) {
    let n = arr.length + 1;
    let sum = n * (n + 1) / 2;
    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
    }
    return sum;
}

console.log(getMissingEl(arr));