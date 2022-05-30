// Input:
// N = 8
// A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with
// sum 0 will be -2 2 -8 1 7.

function maxLen (arr, n) {
    let first_occ = {}
    first_occ[0] = -1;
    let prefix_sum = 0;
    let max_size = 0;
    for (let i = 0; i < arr.length; i++) {
        prefix_sum += arr[i];
        if (first_occ[prefix_sum] !== undefined) {
            max_size = Math.max(max_size, i - first_occ[prefix_sum])
        } else {
            first_occ[prefix_sum] = i;
        }

    }
    return max_size;
}
console.log(maxLen([-1, 1, -1, 1], 4)); 01