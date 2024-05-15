const myArr: number[] = [1,2,4,5];

myArr[3] = 10


// myArr = [78]

console.log(myArr)

myArr.filter((el) => {
    return el%2==0
})

console.log(myArr.filter((el) => el%2==0))

const mat:number[][] = [[1,2,3], [4,5,6], [7,8,9]]