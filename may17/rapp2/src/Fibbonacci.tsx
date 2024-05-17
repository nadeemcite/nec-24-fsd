import {useState, useMemo} from 'react'
export const Fibbonacci:React.FC = ():JSX.Element =>{

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const [textVal, setTextVal] = useState<string>();

  const getFibonacciNumber = (index: number): number => {
    console.log("Calculating for "+index)
    if (index === 0) {
      return 0;
    } else if (index === 1) {
      return 1;
    }
    return getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
  };

  const fiboVal = useMemo(()=>{
    return getFibonacciNumber(currentIndex)
}, [currentIndex])

  return (
    <div>
        <input value={textVal} onChange={(event)=>{setTextVal(event.target.value)}}></input>
      <p>{fiboVal}</p>
      <button onClick={() => setCurrentIndex(currentIndex + 1)}>
        Get Next Fibonacci Number {currentIndex}
      </button>
    </div>
  );
}