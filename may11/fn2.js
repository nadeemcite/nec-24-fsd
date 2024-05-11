function sumMethod1(a, b){
    sum = a+b
    return sum
}

const sumMethod2 = function(a,b){
    sum = a+b
    return sum
}

const sumMethod3 = (a, b) => {
    sum = a+b
    return sum
}

let sum1 = sumMethod1(6, 9)

console.log(`sum = ${sum1}`)
console.log(`sum = ${sumMethod2(6,7)}`)
console.log(`sum is ${sumMethod3(9,8)}`)
