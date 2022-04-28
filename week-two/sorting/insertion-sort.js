function insertionSort (arr) {
    let i = 1;
    let n = arr.length;
    while (i < n) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
            i--;
        } else {
            i++;
        }
    }
    return arr;
}

console.log(insertionSort([4, 1, 3, 9, 7]));