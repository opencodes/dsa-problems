function longestCommonPrefix (strs, n) {
    if (arr.length == 0) {
        return -1
    }
    //code here
    let matchedStr = '';
    let firststWord = arr[0];
    let count = 0;

    for (let j = 0; j < firststWord.length; j++) {
        let char1 = firststWord[j];

        for (let i = 1; i < arr.length; i++) {
            let word = arr[i];
            if (char1 && char1 === word.charAt(j)) {
                count++;

            } else {
                return matchedStr.length ? matchedStr : -1;
            }

        }
        matchedStr += char1;

    }

    return matchedStr.length ? matchedStr : -1;
}
const res = longestCommonPrefix(['geeksforgeeks']);
console.log(res);