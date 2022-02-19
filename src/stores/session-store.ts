import { random_task_for_operator } from "../domain";

import { get, writable } from "svelte/store";

export const operator = writable("");
export const task = writable(null);
export const tasks = writable([]);

export const toggle_operator = (operatorString: string) => {
  operator.update(() => {
    return operatorString;
  });

  new_task();
};

const new_task = (): void => {
  let new_task = null;

  if (get(operator) !== "") {
    new_task = random_task_for_operator(get(operator));
  }

  console.log(new_task);

  task.update(() => {
    return new_task;
  });
};

export const toggle_back = () => {
  toggle_operator("");
};

export const check_task = (answer): void => {
  get(task).check_answer(answer);

  tasks.update((task_array) => {
    let newArray = [...task_array];
    newArray.unshift(get(task));
    return newArray;
  });

  new_task();
};
