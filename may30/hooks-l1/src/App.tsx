import React, {useState} from 'react';
import './App.css';
import { MyNewComponent } from './MyNewComponent'
import { MemoComponent } from './MemoComponent'
import { PersonWithObject } from './PersonWithObject';

function App() {

  const [show, setShow] = useState<boolean>(true)
  return (
    <div>
      {/* {show ? <MyNewComponent /> : <MemoComponent />}

      <button onClick={() =>{setShow(!show)}}>Close Component</button> */}

      <PersonWithObject />
    </div>
  );
}

export default App;
