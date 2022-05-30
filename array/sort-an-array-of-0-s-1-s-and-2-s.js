// arr[]= {0 2 1 2 0}
// arr[]= {0 2 1 2 0,2,0}




// [0, 2, 1, 2, 0, 2, 0]
function sort012 (arr, n) {
    let low = 0;
    let mid = 1;//pointer 1 on left side
    let high = n - 1; // pointer 2 from right side

    while (mid <= high) { // Loop till both pointer reach at same position
        // case 1 : if el at i is 2 and el at j is 2 swap and decremnt j

        if (arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        } else if (arr[mid] === 2) {
            let temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;
            high--;
        } else {
            mid++;
        }
    }
    return arr;
}

console.log(sort012([0, 2, 1, 2, 0, 2, 0], 7));