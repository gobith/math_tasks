import { get, writable } from "svelte/store";

const operations = {
  "+": (c: number) => get(value1) + get(value2) === c,
  "-": (c: number) => get(value1) - get(value2) === c,
  x: (c: number) => get(value1) * get(value2) === c,
  ":": (c: number) => get(value1) / get(value2) === c,
};

export const session = writable({ math_symbol: "" });

export const value1 = writable(7);
export const value2 = writable(6);

export const toggle_math_symbol = (symbol: string) => {
  session.update(() => {
    return { math_symbol: symbol };
  });
};

export const toggle_back = () => {
  toggle_math_symbol("");
};

export const check = (outcome) => {
  return operations[get(session).math_symbol](outcome);
};
