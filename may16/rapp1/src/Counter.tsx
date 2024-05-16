import { useState } from "react";
export const Counter: React.FC = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment the counter</button>
    </div>
  );
};
