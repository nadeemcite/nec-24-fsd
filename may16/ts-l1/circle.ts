import {CShape as S, Square} from './shape'
interface CircleProperties{
    radius: number
}
class Circle extends S<CircleProperties>{
    calculatArea(){
        return Math.PI * this.properties.radius**2;
    }
}
const circle: Circle = new Circle({ radius: 6 })