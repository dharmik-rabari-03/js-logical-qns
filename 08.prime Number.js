//prime number


function prime(num) {

    if (num <= 1) {
        return console.log(num, "is not prime number");

    }


    for (let index = 2; index < num; index++) {

        
    if (num % index === 0) {
        console.log(num, "is not prime number");
        return;
    } 

    }
    console.log(num,"is prime number")

}

prime(5)