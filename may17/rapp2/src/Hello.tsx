import { useState, useEffect } from "react"

interface ComponentProperty{
    customMessage:string
}


export const Hello:React.FC<ComponentProperty> = ({customMessage}):JSX.Element =>{

    const [message, setMessage] = useState<string>("")
    
    useEffect(()=>{
        console.log("This is useEffect with [] function")  // this invoked when component is rendered
        return ()=>{
            console.log("This is returned function in useEffect with [] function") // removed from the view
        }
    }, [])

    useEffect(()=>{
        console.log("message was updated")
    }, [message])

    return <div>
        <p>{customMessage}</p>
        <p>{message}</p>
        <button onClick={()=>{setMessage("Hello")}}>Say Hello</button> <br/>
        <button onClick={()=>{setMessage("Bye")}}>Say Bye</button>
        <p>{customMessage}</p>
        <p>{customMessage}</p>
    </div>
}