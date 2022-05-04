class Solution {
    minJumps (nums, n) {
        let maxR = nums[0];
        let jump = 1;
        let step = nums[0];
        if (n == 1) {
            return 0;
        } else if (nums[0] == 0) {
            return -1;
        } else {
            for (let i = 1; i < n; i++) {
                if (i == n - 1) {
                    return jump;
                }
                maxR = Math.max(maxR, i + nums[i])
                step--;
                if (step == 0) {
                    jump++;

                    if (i >= maxR) {
                        return -1;
                    }
                    step = maxR - i;
                    console.log(jump, 'at >', nums[i]);
                }
            }
        }

    }
}
let arr1 = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1];
// A[0] * B[0] + A[1] * B[1] +…+ A[N-1] * B[N-1]
let sol = new Solution();
console.log(sol.minJumps(arr1, arr1.length)); 