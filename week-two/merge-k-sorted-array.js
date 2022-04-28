let arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


function merge (arr1, arr2) {
    let i = 0;
    let j = 0;
    let k = 0;
    let M = new Array(arr1.length + arr2.length)

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            M[k] = arr1[i];
            i++;
        } else {
            M[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < arr1.length) {
        M[k] = arr1[i];
        k++;
        i++;
    }

    while (j < arr2.length) {
        M[k] = arr2[j];
        k++;
        j++;
    }
    console.log(M);
    return M;

}

function mergeKArrays (array, k) {
    let i = 1;
    let mergedArray = array[0];
    while (i < k) {
        mergedArray = merge(mergedArray, array[i]);
        i++;
    }
    return mergedArray;
}

console.log(mergeKSortedArray(arrays));