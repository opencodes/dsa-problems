
class Solution {
    count = 0;

    merge (arr, l, m, r) {
        let n1 = m - l + 1;
        let n2 = r - m;
        let arrLeft = [];
        let arrRight = [];

        for (let i = 0; i < n1; i++) {
            arrLeft.push(arr[l + i]);
        }
        for (let j = 0; j < n2; j++) {
            arrRight.push(arr[m + 1 + j]);
        }

        let li = 0;
        let ri = 0;
        let k = l;

        while (li < n1 && ri < n2) {
            if (arrLeft[li] <= arrRight[ri]) {
                arr[k] = arrLeft[li];
                li++;
            } else {
                arr[k] = arrRight[ri];
                this.count += (n1 - li);
                ri++;
            }
            k++;
        }

        while (li < n1) {
            arr[k] = arrLeft[li];
            li++;
            k++;
        }
        while (ri < n2) {
            arr[k] = arrRight[ri];
            ri++;
            k++;
        }
    }
    mergeSort (arr, l, r) {

        let m = l + parseInt((r - l) / 2);
        if (l >= r) {
            return;
        }
        this.mergeSort(arr, l, m);
        this.mergeSort(arr, m + 1, r);
        this.merge(arr, l, m, r)
        return this.count;
    }
    // Function to count inversions in the array.
    inversionCount (arr, n) {
        this.mergeSort([...arr], 0, n - 1);
        return this.count;
    }
}
let arr = [2, 4, 1, 3, 5];
let sol = new Solution();
console.log(sol.inversionCount(arr, arr.length));