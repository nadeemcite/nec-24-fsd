abstract class Shape<T>{
    constructor(protected properties:T){
    }
    abstract calculatArea(): number
}

interface SquareProperties{
    side: number
}
class Square extends Shape<SquareProperties>{
    calculatArea() {
        return this.properties.side**2
    }
}
interface RectProperties{
    l: number
    b: number
}
class Rectangle extends Shape<RectProperties>{
    calculatArea() {
        return this.properties.l * this.properties.b;
    }
}


const square: Square = new Square({side : 10})
const rect: Rectangle= new Rectangle({l: 5, b: 9})

console.log(square.calculatArea())
console.log(rect.calculatArea())


/*

abstract class Shape<T>{
    protected properties:T
    constructor(properties:T){
        this.properties = properties
    }
    abstract calculatArea(): number
}

abstract class Shape<T>{
    constructor(protected properties:T){
    }
    abstract calculatArea(): number
}
*/

export {
    Shape as CShape, Square
}