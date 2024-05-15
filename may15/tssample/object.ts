interface Person {
    name: string,
    roll: number,
    address: {
        city: string,
        pincode : number
    },
    salary?: number | string
}
const person:Person  = {
    name: "Xyz",
    roll: 34,
    address: {
        city: "Abc",
        pincode: 787777
    }
}
