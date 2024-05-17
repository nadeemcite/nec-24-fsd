import {useContext} from 'react'
import {CounterContext} from './CounterContext'
export const C2:React.FC = ():JSX.Element => {

    const context = useContext(CounterContext)

    return (
        <button onClick={()=>{context?.incrementCounter()}}>C2 Component {context?.counter}</button>
    )
}