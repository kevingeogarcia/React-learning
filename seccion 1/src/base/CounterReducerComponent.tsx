import { useReducer, useState } from "react";

export const CounterReducerComponent = () => {
  interface Counterstate {
    counter: number;
    previous: number;
    changes: number;
  }

  const INITIAL_STATE: Counterstate = {
    counter: 10,
    previous: 20,
    changes: 10,
  };

  type CounterAction =
    | { type: "reset" }
    | { type: "increaseBy"; payload: { value: number } };

  const counterReducer = (
    state: Counterstate,
    action: CounterAction
  ): Counterstate => {
    switch (action.type) {
      case "reset":
        return {
          previous: 0,
          changes: 0,
          counter: 0,
        };
      case "increaseBy":
        return {
          previous: state.counter,
          changes: state.changes + 1,
          counter: state.counter + action.payload.value,
         
        };
      default:
        return state;
    }
  };
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handlerReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
      <button onClick={handlerReset}>Reset</button>
      <button onClick={() => increaseBy(1)}> + 1 </button>
      <button onClick={() => increaseBy(5)}> + 5 </button>
      <button onClick={() => increaseBy(10)}> + 10 </button>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <hr />
    </>
  );
};
