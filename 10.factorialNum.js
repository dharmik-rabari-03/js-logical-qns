// factorial Num

//method 1 ( using recursive function)

function check1(num) {


    if (num < 0) {
        return console.log("not defined for nagetive number")
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    return num * check1(num - 1)
}

console.log("method 1 :", check1(5))

//method 2 (using loop)

function check2(num) {
    if (num < 0) {
        return console.log("not defined for nagetive number")
    }

    if (num === 0 || num === 1) {
        return console.log("method 2 :", 1);
    }

    let result = 1;

    for (let index = 2; index <= num; index++) {
        result *= index;
    }

    console.log("mthod 2 ", result)
}


check2(6)
