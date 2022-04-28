let arr = [2, 2, 4, 5, 6, 6];
let n = arr.length;

function findPairs (arr, n) {
    let pairs = [];
    let map = {}
    for (let i = 0; i < n; i++) {
        const el = arr[i];
        if (map[el] !== undefined) {
            pairs.push([map[el], i])
            map[el] = undefined
        } else {
            map[el] = i
        }
    }
    return pairs;
}
console.log(findPairs(arr, n));