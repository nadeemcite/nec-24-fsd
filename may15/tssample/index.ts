

const calculateSum = () =>{
    const num1: HTMLInputElement = document.getElementById("num1") as HTMLInputElement;
    const num2: HTMLInputElement = document.getElementById("num2") as HTMLInputElement;
    const result: HTMLElement = document.getElementById("result") as HTMLElement
    const sum = parseInt(num1.value) - parseInt(num2.value)
    result.innerHTML = `sum = ${sum}`
}