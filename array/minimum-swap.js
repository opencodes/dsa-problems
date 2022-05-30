class Solution {
    run (array) {
        // Sort Array 
        let sortedArr = [...arr].sort();
        let unsortedMap = {},
            sortedMap = {};
        for (let i = 0; i < array.length; i++) {
            unsortedMap[array[i]] = i;
            sortedMap[sortedArr[i]] = i;
        }
        let visitedArr = array.map(a => false)
        // Find Cycle of swap for each cycle count cycle length -1 swap
        let ans = 0;
        for (let i = 0; i < array.length; i++) {
            const el = array[i];

            if (visitedArr[i] || sortedMap[el] == i) {
                continue;
            }

            let cycleLength = 0;
            let node = i;
            while (!visitedArr[node]) {
                visitedArr[node] = true;
                node = sortedMap[el];
                cycleLength += 1;
            }
            ans += (cycleLength - 1);
        }
        return ans;
    }
}

let arr = [2, 8, 5, 4];
let sol = new Solution();
console.log(sol.run(arr));
