import React, {useContext} from "react";
import "./App.css";
import {CounterContextProvider, CounterContext} from './CounterContext'
import { C1 } from "./C1";
import { C2 } from "./C2";
import { C3 } from "./C3";

function App() {

  const context  = useContext(CounterContext)

  return (
    <CounterContextProvider>
    <div>
      <div className="counter">{context?.counter}</div>
      <div className="container">
        <div>
          <C1 />
        </div>
        <div>
          <C2 />
        </div>
        <div>
          <C3 />
        </div>
      </div>
    </div>
    </CounterContextProvider>
  );
}

export default App;
