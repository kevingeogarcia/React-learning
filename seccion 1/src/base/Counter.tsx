
import { useState } from "react";

 interface Props {
    initialValue?: number
 }


export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handlerClick = ( ) => {
    /*  ejemplo de como sumarle. */
    //setCounter(counter + 1);
    /* ejemplo de como se utiliza el prev Value del state react. */
    setCounter( prev => prev +1);
  };

  return (
    <>
      <div>
        <button onClick={handlerClick}>Click me</button>
        <h1>Counter: {counter}</h1>
        <hr/>
      </div>
    </>
  );
};
   