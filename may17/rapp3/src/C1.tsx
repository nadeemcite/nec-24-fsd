import {useContext} from 'react'
import {CounterContext} from './CounterContext'
export const C1:React.FC = ():JSX.Element => {

    const context = useContext(CounterContext)

    return (
        <button onClick={()=>{context?.incrementCounter()}}>C1 Component {context?.counter}</button>
    )
}