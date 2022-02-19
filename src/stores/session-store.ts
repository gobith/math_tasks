import { random_task_for_operator } from "../domain";

import { get, writable } from "svelte/store";

export const operator = writable("");
export const task = writable(null);

export const toggle_operator = (operatorString: string) => {
  operator.update(() => {
    return operatorString;
  });

  new_task();
};

const new_task = (): void => {
  task.update(() => {
    return random_task_for_operator(get(operator));
  });
};

export const toggle_back = () => {
  toggle_operator("");
};

export const check_task = (answer): void => {
  get(task).check_answer(answer);
  console.log(get(task));
  new_task();
};
