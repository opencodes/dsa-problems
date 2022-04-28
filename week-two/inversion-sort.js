
class Solution {
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
        return arr;
    }
    // Function to count inversions in the array.
    inversionCount (arr, n) {
        let sortedArr = this.mergeSort([...arr], 0, n - 1);
        let inversionCount = 0;
        console.log(sortedArr, sortedArr.length);
        console.log(arr, arr.length);
        for (let i = 0; i < sortedArr.length; i++) {
            const el = sortedArr[i];
            let j = 0;
            while (arr[j] !== el) {

                if (arr[j] > el) {
                    console.log(inversionCount, arr[j], el);
                    inversionCount++;
                }
                j++;
            }

        }

        return inversionCount;
    }
}
let arr = "468 335 1 170 225 479 359 463 465 206 146 282 328 462 492 496 443 328 437 392 105 403 154 293 383 422 217 219 396 448 227 272 39 370 413 168 300 36 395 204 312 323".split(' ');
let sol = new Solution();
console.log(sol.inversionCount(arr, arr.length));