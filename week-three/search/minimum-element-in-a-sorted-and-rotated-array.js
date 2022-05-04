class Solution {
    searchMin (arr, l, r) {
        if (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (arr[mid] < arr[mid - 1]) {
                return arr[mid];
            }
            if (arr[mid + 1] < arr[mid]) {
                return arr[mid + 1];
            }
            if (arr[r] > arr[mid]) {
                return this.searchMin(arr, l, mid);
            } else {
                return this.searchMin(arr, mid + 1, r);
            }
        }
    }
    findMin (arr, n) {
        if (n == 1) {
            return arr[0]
        }
        if (n == 2) {
            return Math.min(arr[0], arr[1])
        }
        return this.searchMin(arr, 0, n - 1);
    }
}

let arr = [335, 359, 383, 392, 422, 437, 448, 465, 468, 479, 492, 501, 539, 605, 668, 704, 706, 717, 719, 725, 727, 772, 812, 828, 870, 895, 896, 903, 913, 943, 962, 963, 996, 36, 146, 154, 170, 282, 293, 300, 323, 334];
let n = arr.length
let result = findMin(arr, n);
console.log(result);
let sol = new Solution();
console.log("Class -", sol.findMin(arr, n));