class Solution {
    minJumps (arr, n) {
        let i = 0;
        let steps = 0;
        while (i < n) {
            if (arr[i] == 0) {
                steps = -1;
            } else {
                i += arr[i] || n - i;
                steps++
            }
        }
        return steps;
    }
}
let arr1 = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
// A[0] * B[0] + A[1] * B[1] +…+ A[N-1] * B[N-1]
let sol = new Solution();
console.log(sol.minJumps(arr1, 11)); 