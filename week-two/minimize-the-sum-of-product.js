
class Solution {

    swap (arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    findPivot (arr, start, end) {
        let pivot = arr[end];
        let i = start - 1;
        for (let j = start; j <= end; j++) {

            if (arr[j] < pivot) {
                i++;
                this.swap(arr, i, j)
            }
        }
        this.swap(arr, i + 1, end)
        return i + 1;

    }
    quickSort (arr, start, end) {
        if (start < end) {
            let pivot = this.findPivot(arr, start, end);
            this.quickSort(arr, start, pivot - 1);
            this.quickSort(arr, pivot + 1, end)
        }
    }
    minSwaps (array) {
        let map = {}
        let copyArr = []
        for (let j = 0; j < array.length; j++) {
            copyArr[j] = array[j];
        }
        this.quickSort(copyArr, 0, copyArr.length - 1)
        for (let i = 0; i < copyArr.length; i++) {
            const element = copyArr[i];
            map[element] = i;
        }

        let moves = 0;

        console.log(map);
        console.log(array.join(' '));
        console.log(copyArr.join(' '));
        console.log("--------");

        for (let k = 0; k < array.length; k++) {

            while (k != map[array[k]]) {
                console.log("SWAP - ", array[k], map[array[k]], k);
                let temp = array[k];
                let pos = map[array[k]];
                array[k] = array[pos];
                array[pos] = temp;
                console.log(array.join(' '));
                moves++;
            }
        }
        console.log(array);

        return moves;

    }
}

let arr1 = [8, 3, 14, 17, 15, 1, 12];
// A[0] * B[0] + A[1] * B[1] +…+ A[N-1] * B[N-1]
let sol = new Solution();
console.log(sol.minSwaps(arr1)); 