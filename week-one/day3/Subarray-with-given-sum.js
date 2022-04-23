// Input:
// N = 8
// A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with
// sum 0 will be -2 2 -8 1 7.

function maxLen (arr, n, s) {

    let maxCount = 0;
    let curCount = 0;
    let currentSum = 0;




    // Brute Force
    for (let i = 0; i < n; i++) {

        currentSum = arr[i];
        curCount = 1;

        for (let j = i + 1; j < n; j++) {

            const el = arr[j];
            currentSum += el;
            curCount += 1;

            if (currentSum === s && maxCount < curCount) {
                maxCount = curCount;
            }
        }
    }
    return maxCount;
}
console.log(maxLen([1, 2, 3, 7, 5], 5, 12));