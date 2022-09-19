import { useEffect, useState } from "react";

interface Props {
  initialValue?: number;
}


interface dataCounter {
  counter:number;
  clicks:number;

}
export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{counter,clicks}, setCounterState] = useState<dataCounter>({
    counter: initialValue,
    clicks: 0,
  });

  const setDataCounter = (value: number) => {
    setCounterState( ({clicks,counter}) => ({
      counter: counter + value,
      clicks: clicks + 1, 
    }));
  };

  

  return (
    <>
      <div>
        <button onClick={() => setDataCounter(1)}> +1 </button>
        <button onClick={() => setDataCounter(5)}> +5 </button>
        <h1>CounterBy clicks: {clicks}</h1>
        <h1>CounterBy counter: {counter}</h1>
        <hr/>
      </div>
    </>
  );
};
