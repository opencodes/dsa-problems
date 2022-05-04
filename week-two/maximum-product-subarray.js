class Solution {
    maxProduct (arr, n) {
        let minVal = arr[0];
        let maxVal = arr[0];
        let ans = arr[0];

        for (let i = 1; i < n; i++) {
            let el = parseInt(arr[i])
            if (arr[i] < 0) {
                let temp = maxVal;
                maxVal = minVal;
                minVal = temp;
            }
            maxVal = Math.max(parseInt(arr[i]), parseInt(maxVal) * parseInt(arr[i]));
            minVal = Math.min(parseInt(arr[i]), parseInt(minVal) * parseInt(arr[i]));
            ans = Math.max(parseInt(ans), parseInt(maxVal))
        }
        return ans
    }
}

let arr = [2, -8, 6, 12, 22, 27, 29, -38, -31, -29, 21, 21, 27, 32];
let sol = new Solution();
console.log(sol.maxProduct(arr, arr.length));