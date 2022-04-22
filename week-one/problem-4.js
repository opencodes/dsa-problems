// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]



// Will apply Kadane's Algorithm
function getIndices (nums, target) {
    currentSum = nums[0];
    firstIndex = 0;
    secondIndex = 0;

    for (i = 1; i < nums.length; i++) {
        currentSum = currentSum + nums[i]
        if (currentSum === target) {
            secondIndex = i;
            break
        } else {
            firstIndex = i;
            currentSum = nums[i]
        }
    }
    return [firstIndex, secondIndex]
}

console.log(getIndices([2, 7, 11, 15], 9));
console.log(getIndices([3, 2, 4], 6));
console.log(getIndices([-3, 4, 3, 90], 0));
