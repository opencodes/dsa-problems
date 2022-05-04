function getPairsCount (a, n, k) {
    let m = {};
    let c = 0;
    for (let i = 0; i < n; i++) {
        m[a[i]] = (m[a[i]] != undefined) ? m[a[i]] + 1 : 1;
    }
    console.log(m);
    for (let i = 0; i < n; i++) {
        if (m[k - a[i]] != undefined) {
            c += m[k - a[i]];
        }
        if (k - a[i] == a[i]) {
            c--;
        }
    }
    console.log(c);
    return c / 2;
}

let arr = [1, 1, 1, 1];

console.log(getPairsCount(arr, arr.length, 2));