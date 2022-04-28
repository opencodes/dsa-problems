
function bubbleSort (arr, n) {
    if (n == 1) {
        return arr;
    }
    let pass = n;
    while (pass > 0) {
        let swap = 0;
        for (let i = 1; i < n; i++) {
            if (arr[i] < arr[i - 1]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                swap++;
            }
        }
        if (swap == 0) {
            pass = 0;
        } else {
            console.log('Pass - ', pass);
            pass--;
        }
    }
    return arr;

}
console.log(bubbleSort([-2, 0, -9, 11, 45], 5));