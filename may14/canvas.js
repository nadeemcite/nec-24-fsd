const canvas = document.getElementById("myCanvas")


canvas.height = 400

canvas.width = 400

const ctx = canvas.getContext('2d')

const startPoint = {
    x: 0,
    y: 0
}

ctx.strokeStyle = "red"
ctx.lineWidth = 10

// const draw = () =>{
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.beginPath()
//     ctx.moveTo(startPoint.x,startPoint.y)
//     startPoint.x++
//     startPoint.y++
//     ctx.lineTo(startPoint.x,startPoint.y)
//     ctx.stroke()
// }
// setInterval(draw, 10)


ctx.arc(200,200, 20, 0, Math.PI, true)
ctx.stroke()

ctx.rect(100, 100, 100, 50)
ctx.stroke()