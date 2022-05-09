class Solution {

    getLowerNosCount (m, n, mid) {
        let count = 0;
        for (let i = 1; i <= m; i++) {
            let noInrow = Math.min(Math.floor(mid / i), n);
            count += noInrow;
            console.log("Row- ", i, mid, noInrow);
        }
        console.log("getLowerNosCount- ", mid, count);
        return count;
    }

    kthSmallest (m, n, k) {
        let left = 1,
            right = m * n;


        while (left < right) {
            let mid = Math.floor(right - (right - left) / 2);
            let lowerNoCount = this.getLowerNosCount(m, n, mid);
            if (lowerNoCount >= k) {
                right = mid;
            } else {
                left = mid + 1;
            }

        }
        return left;
    }
}

let m = 3;
let n = 3;
let k = 5;

let sol = new Solution();
console.log("kthSmallest no from ", sol.kthSmallest(m, n, k));