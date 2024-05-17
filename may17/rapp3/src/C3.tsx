import {useContext} from 'react'
import {CounterContext} from './CounterContext'
export const C3:React.FC = ():JSX.Element => {

    const context = useContext(CounterContext)

    return (
        <button onClick={()=>{context?.incrementCounter()}}>C3 Component {context?.counter}</button>
    )
}