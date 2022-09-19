export type CounterAction =
  | { type: "reset" }
  | { type: "increaseBy"; payload: { value: number } };

export const doReset = (): CounterAction => ({ type: "reset" });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: "increaseBy",
  payload: { value },
});
