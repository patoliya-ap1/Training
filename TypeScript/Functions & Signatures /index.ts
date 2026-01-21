// typed params & return types

function add(a: number, b: number): number {
  return a + b;
}

// optional/default params

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting} ${name}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(greet("John", "Welcome"));

// rest operators

function sum(...rest: number[]): number {
  const total = rest.reduce((acc, num) => acc + num, 0);
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// spread operators

const orignalArray: number[] = [1, 2, 3, 4, 5];
const newArray: number[] = [...orignalArray];

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "john",
  age: 22,
};

const newPerson: Person = { ...person };

// function types (callbacks)

type CallBack = () => number;

const randomNum = (): number => {
  return Math.floor(Math.random() * (30 - 10 + 1) + 10);
};

function add2(randomNum: CallBack, b: number): void {
  console.log(randomNum() + b);
}

add2(randomNum, 5);
