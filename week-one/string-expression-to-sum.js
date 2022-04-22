let expString = "12+2*10-30+2*4-100";

let sayOperator = ['+', '*', '-'];


function getNumber (s, i) {
    let numberStr = '';
    for (let j = i; j < s.length; j++) {
        if (sayOperator.includes(s[j])) {
            return numberStr;
        } else {
            numberStr += s[j]
        }
    }
    return numberStr;
}

function isNumber (val) {
    if (val.charCodeAt(0) > 47 && val.charCodeAt(0) < 58) {
        return true;
    }
    return false;
}

function getSum (s) {
    if (s.length == 0) {
        return 0;
    }
    let stack = [];
    let sum = 0;
    let operator = '';
    let i = 0;
    while (i < s.length) {
        let n = getNumber(s, i);
        i = i + n.length;
        operator = i < s.length ? s[i] : '';
        if (operator === '*') {
            let nextNumber = getNumber(s, i + 1);
            stack.push(parseInt(n) * parseInt(nextNumber));
            i = i + n.length;
            i++;
            operator = i < s.length ? s[i] : '';
            stack.push(operator);

        } else {
            stack.push(parseInt(n));
            if (operator) stack.push(operator);
        }
        i++;
    }
    console.log(stack);
    let f1 = stack.pop();
    sum = 0;


    while (stack.length) {
        let op = stack.pop();
        switch (op) {
            case '+':
                sum += f1;
                break;
            case '-':
                sum -= f1;
                break;
        }

        f1 = stack.pop();
        if (!stack.length) {
            sum += f1;
        }
    }
    return sum;

}

function evaluate (s) {
    if (s.length == 0) {
        return 0;
    }
    let stack = [];
    let operator = '';
    let i = 0;
    let startBracketAt = 0;

    while (i < s.length) {
        let char = s[i];
        if (!isNumber(char) && operator === ")") {
            startBracketAt = i;// pop till ( found and process that string
        } else {
            stack.push(s[i])
        }

        i++;
    }
}



function sumForOnlyPlusMinus (s) {
    if (s.length == 0) {
        return 0;
    }
    let sum = 0;
    let i = 0;
    let prevOperator = '';

    while (i < s.length) {
        let n = getNumber(s, i);
        if (i === 0) {
            sum = parseInt(n);
        } else {
            switch (prevOperator) {
                case '+':
                    sum += parseInt(n);
                    break;
                case '-':
                    sum -= parseInt(n);
                    break;
                default:
                    break;
            }
        }
        i = i + n.length;
        prevOperator = i < s.length ? s[i] : '';
        i++;
    }
    return sum;
}

console.log(getSum("10+(4+(6-10))*10+20"));