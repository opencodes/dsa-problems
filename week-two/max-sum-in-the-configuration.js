
class Solution {
    //Function to return length of longest subsequence of consecutive integers.
    maxSumInConfiguration (arr, n) {
        if (arr.length == 1) {
            return arr[0];
        }
        let sum = 0;
        let currentSum = 0;
        arr.forEach((item, i) => {
            currentSum += (item * i);
            sum += parseInt(item);
        });
        let maxSum = currentSum;
        // console.log("currentSum", currentSum);
        for (let k = 1; k < n; k++) {
            currentSum = (currentSum + sum - n * (arr[n - 1 - (k - 1)]));
            // console.log("currentSum", currentSum);

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
        return maxSum;
    }
}

let arr = [8, 3, 1, 2];
let sol = new Solution();
console.log(sol.maxSumInConfiguration(arr, arr.length));
