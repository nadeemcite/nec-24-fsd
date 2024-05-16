class Animal{
    static animalType: string
    readonly age: number
    constructor(age: number){
        this.age = age
    }
    getAge(){
        console.log(this.age)
    }
    speak(){
        Animal.animalType = ""
        console.log("Animal speaks")
    }
    static sayHello(){
        this.animalType = ""
    }
}
class Mammal extends Animal {
    nooflegs: number
    getNoofLegs(num: number = 90){
        console.log(this.nooflegs)
    }
    speak(){
        console.log("Mammal speaks")
    }
}
const cow: Animal = new Mammal(10);
const dog: Animal = new Mammal(12);
const cat: Animal = new Mammal(12);
// cow.age = 12;
(cow as Mammal).nooflegs = 30;
(<Mammal>cow).getNoofLegs()

// What is something that can be accessed from child class even if you have reference of parent class?
cow.speak();
Animal.animalType = "animal"