class Solution {
    static maximum (a, b) {
        return a > b ? a : b;
    }
    // Function to find minimum
    static minimum (a, b) {
        return a < b ? a : b;
    }

    getMedian (n, m, a, b) {
        let min_index = 0, max_index = n, i = 0, j = 0, median = 0;

        while (min_index <= max_index) {
            i = Math.floor((min_index + max_index) / 2);
            j = Math.floor((n + m + 1) / 2) - i;

            if (i < n && j > 0 && b[j - 1] > a[i])
                min_index = i + 1;

            else if (i > 0 && j < m && b[j] < a[i - 1])
                max_index = i - 1;

            else {
                if (i == 0)
                    median = b[j - 1];

                else if (j == 0)
                    median = a[i - 1];
                else
                    median = this.maximum(a[i - 1],
                        b[j - 1]);
                break;
            }
        }
        if ((n + m) % 2 == 1)
            return median;

        if (i == n)
            return (median + b[j]) / 2.0;

        if (j == m)
            return (median + a[i]) / 2.0;

        return (median + this.minimum(a[i], b[j])) / 2;
    }
    medianOfArrays (n, m, a, b) {
        let res;
        if (n < m)
            res = this.getMedian(n, m, a, b);
        else
            res = this.getMedian(m, n, b, a);

        return res;
    }
}

let array1 = [1, 3], array2 = [2]
let sol = new Solution();
console.log("medianOfArraysfdgd -", sol.medianOfArrays(array1.length, array2.length, array2));