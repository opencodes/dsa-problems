class Solution {

    findMin (arr, start, end) {
        let max = 0;
        let maxIndex = start;
        if (start == end) {
            console.log("===========> eq ", start, end, arr[start]);
            return 1;
        }
        if (end > arr.length) {
            console.log("===========> >n ", start, end, arr[start], 'Jump', arr.length - start);

            return arr.length - start;
        }
        for (let i = start; i <= end; i++) {
            let nextIndex = arr[i] + (i - start + 1);
            if (nextIndex > max) {
                max = nextIndex;
                maxIndex = i;
            }
        }
        console.log("===========>", start, end, arr[start], 'Jump', maxIndex - start);
        return maxIndex - start;
    }
    minJumps (arr, n) {
        let i = 0;
        let steps = 0;
        while (i < n) {
            if (arr[i] == 0) {
                steps = -1;
            } else {
                i += this.findMin(arr, i, arr[i] + i);
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