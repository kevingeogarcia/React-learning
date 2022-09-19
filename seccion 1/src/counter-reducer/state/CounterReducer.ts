import { CounterAction } from "../actions/actions";
import { Counterstate } from "../interfaces/interfaces";

export const counterReducer = (
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
