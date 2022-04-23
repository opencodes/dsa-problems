// Given an array A of n positive numbers. The task is to find the first Equilibium Point in the array.
// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
// Example 1:
// Input: 
// n = 5 
// A[] = {1,3,5,2,2} 

function equilibriumPoint (arr, n) {
    let p1 = 0;
    let p2 = n - 1;
    let p1Sum = arr[p1];
    let p2Sum = arr[p2];
    let output = -1;

    while (p2 != p1 && (p1 + p2) <= n) {
        console.log('p1', p1, 'p2', p2, 'p1Sum', p1Sum, 'p2Sum', p2Sum, n, "(p2 - p1) ", (p2 - p1));

        if (p1Sum < p2Sum) {
            p1 += 1;
            p1Sum += arr[p1]
        } else {
            p2 -= 1;
            p2Sum += arr[p2]
        }
    }
    console.log('p1', p1, 'p1Sum', p1Sum, 'p2', p2, 'p2Sum', p2Sum, n, "(p2 - p1) ", (p2 - p1));

    if (p2 - p1 == 0 && p1Sum == p2Sum) {
        output = p1;
    }

    return output;
}
let arr = "20 17 42 25 32 32 30 32 37 9 2 33 31 17 14 40 9 12 36 21 8 33 6 6 10 37 12 26 21 3".split(' ').map(k => parseInt(k));
console.log("Output : ", equilibriumPoint(arr, arr.length));

