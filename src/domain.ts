export class Task {
  value1: number;
  value2: number;
  answer: number;
  outcome: boolean;


  constructor() { }

  operator() {
    return "";
  }

  randomize(): void {
    this.value1 = randomValue();
    this.value2 = randomValue();
  }

  task_string(): string {
    return `${this.value1} ${this.operator()} ${this.value2}`;
  }

  check_answer(a): void {
    this.answer = a;
    this.outcome = this.check();
  }

  check(): boolean {
    return false;
  }


}

export class Addition extends Task {
  constructor() {
    super();
  }
  operator() {
    return "+";
  }
  check() {
    return this.value1 + this.value2 === this.answer;
  }
}

export class Subtraction extends Task {
  constructor() {
    super();
  }
  operator() {
    return "-";
  }
  check() {
    return this.value1 - this.value2 === this.answer;
  }

  randomize(): void {
    let val1 = randomValue();
    let val2 = randomValue();
    this.value1 = Math.max(val1, val2);
    this.value2 = Math.min(val1, val2);
  }
}

export class Multiplication extends Task {
  constructor() {
    super();
  }

  operator() {
    return "x";
  }
  check() {
    return this.value1 * this.value2 === this.answer;
  }
}

export class Division extends Task {
  constructor() {
    super();
  }

  operator() {
    return "÷";
  }
  check() {
    return this.value1 / this.value2 === this.answer;
  }

  randomize(): void {
    let val1 = randomValue();
    let val2 = randomValue();
    this.value1 = val1 * val2;
    this.value2 = val1;
  }
}

const taskClasses = () => {
  return { "+": Addition, "-": Subtraction, x: Multiplication, ":": Division };
};

const task_for_operator = (operator: string) => {
  let cls = taskClasses()[operator];
  return new cls();
};

export const random_task_for_operator = (operator: string) => {
  let task = task_for_operator(operator);
  task.randomize();
  return task;
};

const randomValue = (): number => {
  return Math.floor(Math.random() * 11);
};
