//Kadane’s algorithm Array = [1,0,-3,4,5,-2,3,-4,-6]

// Find subarray with minimum sum and return the sum
let arr = [1, 2, -3, 2, -4, 3, -1, 5, 6, 9]

// let ouput = [-5(-3, 2, -4)]


// Will apply Kadane's Algorithm
function getMaxSumOfSubArray (arr) {
    let i = 0;
    maxSum = -Infinity;
    currentSum = 0;
    firstIndex = 0;
    lastIndex = 0;

    for (i = 1; i < arr.length; i++) {

        currentSum = currentSum + arr[i]


        if (currentSum > maxSum) {
            maxSum = currentSum;
            lastIndex = i + 1;
        }

        if (currentSum < 0) {
            currentSum = 0;
            firstIndex = i + 1;
        }
    }

    return {
        max: maxSum,
        subArr: arr.slice(firstIndex, lastIndex)
    };
}

// Will apply Kadane's Algorithm
function getMinSumOfSubArray (arr) {
    let i = 0;//4
    minSum = Infinity; // -1
    currentSum = 0;//3

    firstIndex = 0;
    lastIndex = 0;

    for (i = 1; i < arr.length; i++) {

        currentSum = currentSum + arr[i]//  4

        if (currentSum < minSum) {// false 
            minSum = currentSum;
            lastIndex = i + 1
        }
        if (arr[i] < minSum) {// false 
            minSum = arr[i];
            currentSum = arr[i]
            firstIndex = i;
        }
    }

    return {
        min: minSum,
        subArr: arr.slice(firstIndex, lastIndex)
    };
}

let minResult = getMinSumOfSubArray(arr);
let maxResult = getMaxSumOfSubArray(arr);

console.log('min sub array of [1, 2, -3, 2, -4, 3, -1, 5, 6, 9] is ', minResult.min, minResult.subArr);
console.log('max sub array of [1, 2, -3, 2, -4, 3, -1, 5, 6, 9] is ', maxResult.max, maxResult.subArr);

