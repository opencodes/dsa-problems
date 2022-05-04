
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/
class Solution {

    searchMin (arr, l, h, k) {
        let mid = Math.floor(h - (h - l) / 2);
        let requiredPainter = 1;
        let maxSum = 0;
        let currentSum = 0;
        if (l < h) {
            for (let i = 0; i < n; i++) {
                const el = arr[i];

                if ((currentSum + el) <= mid) {
                    currentSum += el;
                } else {
                    if (maxSum < currentSum) {
                        maxSum = currentSum;
                    }
                    currentSum = el;
                    requiredPainter++;
                }
            }
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
            if (requiredPainter > k) {
                return this.searchMin(arr, mid + 1, h, k)
            }
            if (requiredPainter < k) {
                return this.searchMin(arr, l, mid, k)
            }

        }
        return maxSum;
    }

    minTime (arr, n, k) {
        let sum = 0;
        let max = 0;
        let currentSum = 0;
        for (let i = 0; i < n; i++) {
            sum += arr[i];
            currentSum += arr[i];
            if (max < currentSum) {
                max = currentSum;
            }
        }
        if (n == k) {
            return max;
        }
        let avg = Math.floor(sum / k);
        return this.searchMin(arr, avg, sum, k);
    }
}
//  Input
let arr = [4, 2, 22, 8, 2, 11, 19, 13];
let n = arr.length;
// Output
let sol = new Solution();
console.log("Soln : ", sol.minTime(arr, n, 3));