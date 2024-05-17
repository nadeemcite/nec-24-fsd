import React, { useState } from 'react';
import './App.css';
import {Hello} from './Hello'
import {Fibbonacci} from './Fibbonacci'
import { Fibonacci2 } from './Fibonacci2';
import {MyCanvas} from './Mycanvas'

function App() {

  const [showHelloComponent, setShowHelloComponent] = useState<boolean>(false)

  const [customMessage, setCustomMessage] = useState<string>("")

  return (
    
    <div>
      <MyCanvas />
      {/* <Fibbonacci /> */}
      {/* <input value={customMessage} onChange={(event) =>{setCustomMessage(event.target.value)}}></input>
      {showHelloComponent && (
        <Hello customMessage={customMessage}/>
      )}
      

      <button onClick={()=>{setShowHelloComponent(!showHelloComponent)}}>Show/Hide Hello Component</button> */}
    </div>
  );
}

export default App;
