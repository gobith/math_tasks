export class Task {
    value1: number;
    value2: number;
    answer: number;
    outcome: boolean;

    constructor(value1: number, value2: number) {
        this.value1 = value1;
        this.value2 = value2;

    }

    operator() {

    }
}


export class Addition extends Task {
    constructor(value1: number, value2: number) {
        super(value1, value2);
    }
    operator() {
        return "+"
    }
    check() {
        return this.value1 + this.value2 === this.answer
    }
}

export class Subtraction extends Task {
    constructor(value1: number, value2: number) {
        super(value1, value2);
    }

    operator() {
        return "-"
    }

    check() {
        return this.value1 - this.value2 === this.answer
    }
}

export class Multiplication extends Task {
    constructor(value1: number, value2: number) {
        super(value1, value2);
    }

    operator() {
        return "x"
    }

    check() {
        return this.value1 * this.value2 === this.answer
    }
}

export class Division extends Task {
    constructor(value1: number, value2: number) {
        super(value1, value2);
    }

    operator() {
        return "/"
    }

    check() {
        return this.value1 / this.value2 === this.answer
    }
}