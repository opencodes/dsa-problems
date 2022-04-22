// Given a 2d array arr[][] with each row representing a pair representing entry and exit time of a car in a parking lot, the task is to calculate the maximum number of cars that can be parked at the same time.

// Examples:

// Input: arr[][] = {{1012, 1136}, {1317, 1417}, {1015, 1020}}
// Output: 2
// Explanation:
// 1st car entered at 10:12 and exits at 11:36 and 3rd car entered at 10:15 and exits at 10:20.
// Therefore, 1st and 3rd car are present at the same time.

// Input: arr[][] = {{1120, 1159}, {1508, 1529}, {1508, 1527}, {1503, 1600}, {1458, 1629}, {1224, 1313}}
// Output: 4
// Explanation: 2nd, 3rd, 4th and 5th cars are present at the same time.


let array = [
    [1012, 1136],
    [1317, 1417],
    [1015, 1020]
];


let max = 1;
let curr = 1;

let start = array[0][0];
let end = array[0][1];

for (let i = 1; i < array.length; i++) {
    let el = array[i];
    if ((el[0] > start && el[0] < end) || (el[1] > start && el[1] < end)) {
        curr += 1;
        console.log("In the range ", el[0], el[1]);
    } else {
        curr = 0;
    }
    if (curr > max) {
        max = curr
    }
    console.log(curr, max);
}

console.log("Output", max);