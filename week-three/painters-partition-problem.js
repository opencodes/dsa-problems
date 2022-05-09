
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
        console.log("l", l, "h", h, "mid", mid);
        console.log("----------------------------");
        let str = "";
        if (l < h) {
            for (let i = 0; i < arr.length; i++) {
                const el = arr[i];

                if ((currentSum + el) <= mid) {
                    console.log("el", el, "K-", requiredPainter);
                    currentSum += el;
                    str += ", " + el
                } else {
                    console.log("el ==> next", str);
                    if (maxSum < currentSum) {
                        maxSum = currentSum;
                    }
                    str = " " + el
                    currentSum = el;
                    requiredPainter++;
                }
            }
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
            console.log("Output", maxSum, "mid", mid, "requiredPainter", requiredPainter, currentSum);
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

        for (let i = 0; i < n; i++) {
            sum += arr[i];
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        if (n == k) {
            return max;
        }

        return this.searchMin(arr, max, sum, k);
    }
}
//  Input
let arr = [10, 5, 20, 25, 17, 23, 2, 9, 4, 13];
let n = arr.length;
// Output
let sol = new Solution();
console.log("Soln : ", sol.minTime(arr, n, 7));