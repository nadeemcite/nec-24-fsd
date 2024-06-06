const app = require("./index")

const PORT = 8080

app.listen(PORT, (err)=>{
    // if(err){
    //     console.log("Error occurred")
    // }else{
    //     console.log(`SERVER IS RUNNING ${err}`)
    // }
    console.log(err? "Error occurred": `Server is running at ${PORT}`)
})
