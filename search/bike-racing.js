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

    buzzTime (H, A, N, M, L) {
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

N = 3, M = 400, L = 120
H = [20, 50, 20]
A = [20, 70, 90]

let sol = new Solution();
console.log("minimum number of hours after which the safety alarm will start is ", sol.buzzTime(H, A, N, M, L));