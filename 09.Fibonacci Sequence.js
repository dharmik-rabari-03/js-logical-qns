
//Fibonacci Sequence

function check(num) {
    let num1 = 0;
    let num2 = 1;
    let next;

    for (let index = 0; index < num; index++) {
        console.log(num1)


        next = num1 + num2;
        num1 = num2;
        num2 = next;

    }



}
check(20)