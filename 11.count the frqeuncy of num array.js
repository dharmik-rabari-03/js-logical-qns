// Write a Program to print the frequency of elements in an array?
// The frequency function counts how many times each number appears in an array. It creates an empty object freq, iterates through the array, and either increments the count for existing numbers or adds new numbers with a count of 1. Finally, it returns the freq object with the counts.

//method 1

let num = [1, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 10];

function check1() {
  let count = {};

  for (let n of num) {
    if (count[n]) {
      count[n] = count[n] + 1;
    } else {
      count[n] = 1;
    }
  }

  console.log(count);
}
check1();

//method 2 (using for loop)

function check2() {
  let count = {};

  for (let index = 0; index < num.length; index++) {
    if (count[num[index]]) {
      count[num[i]] = count[num[index]];
    }
  }
}
