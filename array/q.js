


/*
 * Complete the 'countDecreasingRatings' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY ratings as parameter.
 */

function countDecreasingRatings (ratings) {
    // Write your code here
    if (!ratings.length) {
        return 0
    }
    let count = 1;
    let len = 1;
    for (var i = 1; i < ratings.length; i++) {
        if (ratings[i - 1] > ratings[i]) {
            len++;
        } else {
            let sum = ((len + 1) * len) / 2;
            count += parseInt(sum);
            len = 1;
        }
    }
    if (len > 1) {
        let sum = ((len + 1) * len) / 2;
        count += parseInt(sum);
    }
    return count;
}
countDecreasingRatings([4, 3, 5, 4, 3])

function findPasswordStrength (password) {
    let n = password.length;

    let distinctCount = 0;
    function countDistinct (str) {
        let map = {};
        let count = 0;
        for (var i = 0; i < str.length; i++) {
            if (!map[str[i]]) {
                map[str[i]] = 1;
                count++;
            }
        }
        return count;
    }

    for (var i = 1; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            let word = password.substr(i, j + 1);
            distinctCount += countDistinct(word);
        }
    }

    // Write your code here
    return distinctCount;
}

