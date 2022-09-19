import React from "react";
import { Counter } from "./base/Counter";
import { CounterBy } from "./base/CounterBy";
import { CounterEffect } from "./base/CounterEffect";
import { CounterHook } from "./base/CounterHook";
//import { CounterReducerComponent } from "./base/CounterReducerComponent";
import { CounterReducerComponent } from "./counter-reducer/CounterReducerComponent";
function App() {
  return (
    <>
      <h1>React</h1>
      <hr />

      <Counter initialValue={15}></Counter>
      <CounterBy />
      <CounterEffect />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;
