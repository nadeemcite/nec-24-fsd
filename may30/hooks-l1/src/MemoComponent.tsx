import { useState, useMemo } from "react"

export const MemoComponent: React.FC = (): JSX.Element =>{

    const [index, setIndex] = useState<number>(0)

    const [text, setText] = useState<string>("")

    const fib = (n:number): number =>{
        // heavy/costly function
        if (n === 0 || n === 1){
            return 1
        }else{
            return fib(n-1) + fib(n-2)
        }
    }

    const fibMemo = useMemo(()=>{
        return fib(index)
    }, [index])
    
    return <div>
        Text: {text} <br />
        Index : {index} <br />
        Fibb: {fibMemo} < br/>
        <button onClick={()=>{setIndex(index+1)}}>Get Next Fib</button><br />
        <input onChange={(event)=>{setText(event.target.value)}} />
    </div>
}