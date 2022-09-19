import { useEffect, useState, useRef } from "react";
import { useCounter } from '../hook/useCounter';



export const CounterHook = () => {
  const {counter,elementToAnimate,handlerClick} = useCounter({maxCount:15});
  return (
    <>
      <div>
        <h1>counterHook:</h1>
        <h2 ref={elementToAnimate}> {counter} </h2>
        <button onClick={handlerClick}>+ 1</button>
        <hr />
      </div>
    </>
  );
};
