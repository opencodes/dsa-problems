// Input:
// N = 8
// A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with
// sum 0 will be -2 2 -8 1 7.

function subarraySum (arr, n, k) {
    //cur_sum to keep track of cummulative sum till that point
    let cur_sum = 0;

    let start_point = 0; // to keep track of starting point of subarray
    let end_point = -1;  // to keep track of ending point

    // creating a hash map whose key will be equal to the index
    // and value will be equal to the sum till that index
    let hm = {};


    // Iterating the array from starting to ending position
    for (let i = 0; i < n; i++) {
        /* 
        There are three possibilties for an element now :-
 
        CASE 1) If the element is not present in Hashmap, simply add it.
        CASE 2) If adding the current element gives the desired sub array (i.e. subarrat found between 0th and the
        current position
        CASE 3) If the hashmap already contains that value, means we already have the subarray, simply STOP at this point
        */

        cur_sum = cur_sum + arr[i];


        hm[cur_sum] = i;  // CASE 1,we are adding curr_sum as value and i as index in the hashmap

        if (cur_sum - k == 0)   // CASE 2
        {
            start_point = 0;
            end_point = i;
            break;
        }

        if (hm[cur_sum - k] != undefined)  // CASE 3
        {
            start_point = hm[cur_sum - k] + 1;
            end_point = i;
            break;
        }

    }
    // if end is -1 : means we have reached end without the sum
    if (end_point == -1) {
        // System.out.println("No subarray with a sum equals to k in the input array");
        return [-1]
    }
    else {
        // System.out.println("The elements from position " + start_point + " to " + end_point + "form the required sub array");
        return [start_point + 1, end_point + 1]
    }
}

let str = "142 112 54 69 148 45 63 158 38 60 124 142 130 179 117 36 191 43 89 107 41 143 65 49 47 6 91 130 171 151 7 102 194 149 30 24 85 155 157 41 167 177 132 109 145 40 27 124 138 139 119 83 130 142 34 116 40 59 105 131 178 107 74 187 22 146 125 73 71 30 178 174 98 113";
let arr = str.split(' ').map(item => parseInt(item))

console.log(subarraySum(arr, 74, 665));