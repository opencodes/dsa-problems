
function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function findPivot (arr, start, end) {

    let pivot = arr[end];
    let i = start - 1;
    for (let j = start; j <= end; j++) {

        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, end)
    return i + 1;

}
function quickSort (arr, start, end) {
    if (start < end) {
        let pivot = findPivot(arr, start, end);
        quickSort(arr, start, pivot - 1);
        quickSort(arr, pivot + 1, end)
    }
}
let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

quickSort(arr, 0, n - 1)
console.log(arr);