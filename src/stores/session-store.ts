import { get, writable } from "svelte/store";

const operations = {
  "+": (c: number) => get(value1) + get(value2) === c,
  "-": (c: number) => get(value1) - get(value2) === c,
  x: (c: number) => get(value1) * get(value2) === c,
  ":": (c: number) => get(value1) / get(value2) === c,
};

export const operator = writable("");
export const value1 = writable(7);
export const value2 = writable(6);

export const toggle_operator = (operatorString: string) => {
  operator.update(() => {
    return operatorString;
  });
};

export const toggle_back = () => {
  toggle_operator("");
};

export const check = (outcome) => {
  let bool = operations[get(operator)](outcome);
  return bool
};
