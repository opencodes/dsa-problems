// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]



function getIndices (nums, target) {

    let map = {};

    nums.forEach((item, index) => {
        map[item] = index;
    });
    for (i = 0; i < nums.length; i++) {
        let complimant = target - nums[i];
        if (map[complimant]) {
            return [i, map[complimant]]
        }
    }
    return -1;
}

console.log(getIndices([2, 7, 11, 15], 9));
console.log(getIndices([3, 2, 4], 6));
console.log(getIndices([-3, 4, 3, 90], 0));
