abstract class Vehicle{
    abstract drive()

    maintain(){
        console.log("Vehicle is at maintenance")
    }
}

class Bycicle extends Vehicle{
    drive(){
        console.log("Runs on 2 wheels")
    }
}

const bike: Vehicle = new Bycicle()
bike.drive()