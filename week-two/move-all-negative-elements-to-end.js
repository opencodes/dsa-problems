// arr[]= {0 2 1 2 0}
// arr[]= {0 2 1 2 0,2,0}




// [0, 2, 1, 2, 0, 2, 0]
function segregateElements (arr, n) {
    let posArr = new Array();
    let negArr = new Array();
    for (let i = 0; i < n; i++) {
        el = arr[i];
        if (el > 0) {
            posArr.push(el)
        } else {
            negArr.push(el)
        }
    }
    let k = 0;
    let j = posArr.length;
    console.log(posArr, negArr);
    while (k < posArr.length && j < n) {
        arr[k] = posArr[k];
        arr[j] = negArr[k];
        k++;
        j++;
    }
    console.log(k, j, arr);
    while (k < posArr.length) {
        arr[k] = posArr[k];
        k++;
    }
    while (j < n) {
        arr[j] = negArr[j - posArr.length];
        j++;
    }

    return arr;
}
const arr = [-2, 10, -3, -4, 8];
console.log(segregateElements(arr, arr.length));