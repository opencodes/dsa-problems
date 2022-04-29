class Solution {
    //Function to check if two arrays are equal or not.
    check (A, B, N) {
        let map = {};
        for (let i = 0; i < N; i++) {
            map[A[i]] = map[A[i]] != undefined ? map[A[i]] + 1 : 1;
        }
        for (let j = 0; j < N; j++) {
            console.log(map, B[j]);
            if (map[B[j]] != undefined && map[B[j]] !== 0) {
                map[B[j]] -= 1;

            } else {

                return 0;
            }
        }
        return 1;
    }

}
let arr1 = "445 627 523 466 709 417 283 259 925 638 63 625 601 37 453 900 380 551 469 72 974 132 882 931 934 895 661 164 200 982 900 997 960 774 814 669 191".split(' ');
let arr2 = "709 900 469 37 283 417 259 132 974 814 551 466 982 627 63 669 934 625 661 960 601 380 523 200 900 191 895 774 72 997 638 931 445 925 453 164 882".split(" ");

let sol = new Solution();
console.log(sol.check(arr1, arr2, arr1.length)); 