import { useState, createContext, ReactNode } from "react";
interface ICounterContext {
  counter: number;
  incrementCounter: () => void;
}

interface ContextChildren {
    children: ReactNode
}

export const CounterContext = createContext<ICounterContext | undefined>(undefined);

export const CounterContextProvider: React.FC<ContextChildren> = ({children}:ContextChildren) => {
  const [counter, setCounter] = useState<number>(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export {};
