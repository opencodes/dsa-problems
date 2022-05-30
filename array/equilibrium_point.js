// Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array.
// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
// Example 1:
// Input: 
// n = 5 
// A[] = {1,3,5,2,2} 

function equilibriumPointOld (arr, n) {
    let p1 = 0;
    let p2 = n - 1;
    let p1Sum = arr[p1];
    let p2Sum = arr[p2];
    let output = -1;

    while (p1 + 2 !== p2) {

        if (p1Sum < p2Sum) {
            p1 += 1;
            p1Sum += arr[p1]
        } else {
            p2 -= 1;
            p2Sum += arr[p2]
        }
    }

    if (p1Sum == p2Sum) {
        output = p1 + 1;
    }

    return output;
}


function equilibriumPoint (arr, n) {
    let sum = 0;
    for (let k = 0; k < n; k++) {
        console.log(arr[k], sum);
        sum += arr[k];
    }
    let currentSum = 0;

    for (let i = n - 1; i >= 0; i--) {
        console.log(sum, arr[i], 2 * currentSum);
        if (sum - arr[i] - (2 * currentSum) == 0) {
            return i + 1;
        }
        currentSum += arr[i];
    }
    return -1;
}
let arr = [1, 3, 5, 2, 2]
console.log("Output : ", equilibriumPoint(arr, arr.length));