//remove first element of array

//method 1

const fruit1 = ["mango", "pinapple", "cherry", "apple"]

const check1 = () => {

    console.log("1. before delete first element : ", fruit1)

    let remove1 = fruit1.shift()

    console.log("1. after delete first element : ", fruit1)

}

check1()


console.log("")


//method 2


const fruit2 = ["mango", "pinapple", "cherry", "apple"]

const check2 = () => {
    const newArr = []

    for (let i = 1; i < fruit2.length; i++) {
        newArr.push(fruit2[i])

    }
    console.log("2. before delete first element : ", fruit2)

    console.log("2. after delete first element : ", newArr)

}

check2()

console.log("")



//method 3

const fruit3 = ["mango", "pinapple", "cherry", "apple"]

const check3 = () => {

    const useSlice = fruit3.slice(1)
    console.log("3. before delete first element : ", fruit3)
    console.log("3. after delete first element : ", useSlice)

}

check3()