import { useReducer, useState } from "react";
import * as actions from "./actions/actions";
import { Counterstate } from "./interfaces/interfaces";
import { counterReducer } from "./state/CounterReducer";

const INITIAL_STATE: Counterstate = {
  counter: 10,
  previous: 20,
  changes: 10,
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handlerReset = () => {
    dispatch(actions.doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>counter reducer segmantado</h1>
      <button onClick={handlerReset}>Reset</button>
      <button onClick={() => increaseBy(1)}> + 1 </button>
      <button onClick={() => increaseBy(5)}> + 5 </button>
      <button onClick={() => increaseBy(10)}> + 10 </button>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <hr />
    </>
  );
};
