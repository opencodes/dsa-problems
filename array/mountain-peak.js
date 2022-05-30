class Solution {
    getPeakLengthToLeft (arr, index) {
        let count = 0;
        while (index >= 1 && arr[index] > arr[index - 1]) {
            count++;
            index--;
        }
        return count;
    }
    getPeakLengthToRight (arr, index) {
        let count = 0;
        while (index < arr.length - 1 && arr[index] > arr[index + 1]) {
            count++;
            index++;
        }
        return count;
    }

    run (arr) {
        let maxSubArrayLength = 0;
        let currPeakLength = 0;
        for (let i = 1; i < arr.length - 1; i++) {
            const curr = arr[i];
            const left = arr[i - 1];
            const right = arr[i + 1];

            if (curr > right && curr > left) { // its a peak
                currPeakLength = 1;
                currPeakLength += this.getPeakLengthToLeft(arr, i);
                currPeakLength += this.getPeakLengthToRight(arr, i);
                console.log('Found peak traverse back and left is -', currPeakLength);
                maxSubArrayLength = maxSubArrayLength < currPeakLength ? currPeakLength : maxSubArrayLength;
            }

        }
        return maxSubArrayLength;
    }
}

let arr = [1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5];
let sol = new Solution();
console.log(sol.run(arr));
