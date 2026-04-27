//largest number in array

const num = [1, 2, 3, 4, 5, 6, 7, 8, 24];

function check1() {
  let max = Math.max(...num);

  console.log("largest number is : ", max);
}

check1();


//method 2
function check2() {

  let largest = num[0];

  for (let i = 1; i < num.length; i++) {

    if (num[i] > largest)
      largest = num[i];
  }

  console.log("largest number is : ", largest)
}

check2()

//method 3

function check3() {

  let number;
  number = num.reduce((acc, curr) => {
    if (acc < curr) {

      acc = curr;

    }

    return acc;
  })

  console.log("largest num is : ", number)
}

check3()