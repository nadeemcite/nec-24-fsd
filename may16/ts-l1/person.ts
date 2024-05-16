interface Person {
    name: string
    age: number
    greet()
}

interface Student extends Person{
    roll: number
}

const student: Student= {
    name: "Xyz",
    age: 14,
    roll: 78,
    greet(){

    }
}