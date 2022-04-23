let arrivals = [0900, 0940, 0950, 1100, 1500, 0900]
let departures = [0910, 1200, 1120, 1130, 1900, 2000]


function findPlatform (arival, dep, n) {
    let arrayOfTimes = [];
    for (let i = 0; i < arival.length; i++) {
        arrayOfTimes.push({ time: arival[i], in: 1 })
        arrayOfTimes.push({ time: dep[i], in: - 1 })
    }
    let arr1 = arrayOfTimes.sort((a, b) => a.time - b.time);
    let arr = arr1.map(item => item.in);
    console.log(arr);
    let maxSum = arr[0];
    let currSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (currSum + arr[i] < arr[i]) {
            currSum = arr[i];
        } else {
            currSum = currSum + arr[i];
        }

        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum;
}

console.log(findPlatform(arrivals, departures, arrivals.length));