class MyPerson{
    name:string
    constructor(n:string){
        this.name = n
    }
    sayHello(){
        console.log(this.name)
    }
}

const myPerson: MyPerson = new MyPerson("my name")
myPerson.sayHello()