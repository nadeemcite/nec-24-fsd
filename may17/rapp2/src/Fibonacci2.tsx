import React, { useState, useMemo } from 'react';

function FibonacciCalculator({ number }:{number:number}) {
  const calculateFibonacci = (n:number): number => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const fibonacciNumber = useMemo(() => calculateFibonacci(number), [number]);

  return (
    <div>
      <h2>Fibonacci Sequence</h2>
      <p>Fibonacci number at position {number}: {fibonacciNumber}</p>
    </div>
  );
}

export function Fibonacci2() {
  const [inputValue, setInputValue] = useState(1);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
      />
      <FibonacciCalculator number={inputValue} />
    </div>
  );
}