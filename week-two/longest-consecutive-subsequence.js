
class Solution {
    //Function to return length of longest subsequence of consecutive integers.
    findLongestConseqSubseq (arr, n) {
        let max = arr[0];
        let min = arr[0];
        let map = {};

        for (let i = 0; i < n; i++) {
            if (arr[i] < min) min = arr[i];
            if (arr[i] > max) max = arr[i];
            map[arr[i]] = 1;
        }

        let maxSeq = 0;
        let currSeq = 0;
        console.log(max, min, map);

        for (let j = min; j <= max; j++) {
            console.log(j, map[j]);
            if (map[j] != undefined) {
                currSeq++;
            } else {
                currSeq = 0;
            }
            // console.log(currSeq);
            if (currSeq > maxSeq) {
                maxSeq = currSeq;
            }
        }
        return maxSeq;

    }
}

let arr = [1, 2, 3, 4, 5];
let sol = new Solution();
console.log(sol.findLongestConseqSubseq(arr, arr.length));