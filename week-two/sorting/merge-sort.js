function merge (arr, l, m, r) {
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

function mergeSort (arr, l, r) {
    let m = l + parseInt((r - l) / 2);
    if (l >= r) {
        return;
    }
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r)
    return arr;
}

let arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr, 0, 6)
console.log(arr);