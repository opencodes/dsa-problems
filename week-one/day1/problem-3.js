// Find minimum subarray sum for each index i in subarray[i, N - 1]
// Input: arr[] = { 3, - 1, -2}
// Output: -3 - 3 - 2

// Will apply Kadane's Algorithm
function getMinSumOfSubArray (arr, k) {
    let i;//4
    minSum = Infinity; // -1
    currentSum = 0;//3

    let subArray = [];
    for (i = k; i < arr.length; i++) {
        currentSum = currentSum + arr[i]//  4
        if (currentSum < minSum) {// false 
            minSum = currentSum;
        }
        if (arr[i] < minSum) {// false 
            minSum = arr[i];
            currentSum = arr[i]
            subArray = []
        }
        subArray.push(arr[i])
    }
    return minSum
}

function output (arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        const minSum = getMinSumOfSubArray(arr, i);
        output.push(minSum);
    }

    return output;
}

console.log(output([3, - 1, -2]));