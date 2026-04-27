//find The smallest Num

const num = [3, 4, 5, 6, 7, 8, 24];


//method 1

function check1() {

    let smallest1=Math.min(...num)

    console.log("1. smallest num :",smallest1)

}
check1()

function check2(){

    let smallest2=num.reduce((acc,curr)=>{
        if(curr < acc){
            acc=curr;
        }
        return acc;
    })
    console.log("2. smallest num : ",smallest2)

}

check2()


//method 3


function check3(){

    let smallest3=num[0];

    for (let i = 1; i < num.length; i++) {

        if(num[i] < smallest3){
            smallest3=num[i];
        }
    }
    console.log("3. smallest num : ",smallest3)

}

check3()