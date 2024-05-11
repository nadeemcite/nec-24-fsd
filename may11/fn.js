function sumMethod1(a, b){
    sum = a+b
    console.log(`Sum = ${sum}`)
}

const sumMethod2 = function(a,b){
    sum = a+b
    console.log(`Sum = ${sum}`)
}

const sumMethod3 = (a, b) => {
    sum = a+b
    console.log(`Sum = ${sum}`)
}

console.log(sumMethod1(6, 9))

sumMethod2(6,7)
sumMethod3(9,8)