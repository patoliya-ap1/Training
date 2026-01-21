// Generic functions & interfaces

function identity<T>(arg: T): T {
  return arg;
}

let outputNumber = identity<number>(123);

let outputString = identity("John");

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const mergeObj = merge({ name: "alice" }, { age: 30 });

//

function arrayEl<T>(arr: T[]): void {
  for (const x of arr) {
    console.log(x);
  }
}

let elementsNums: number[] = [101, 102, 103];

let elementsStr: string[] = ["Apple", "Orange", "Kiwi"];

arrayEl(elementsNums);
arrayEl(elementsStr);

// merge array

function mergeArray<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["Apple", "Orange", "Kiwi"];

const mergedArray: (number | string)[] = mergeArray(numbers, fruits);

// interface

interface ApiResponse<T> {
  data: T;
  error?: string;
}

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "john",
  age: 22,
};

console.log(pluck(person, "name"));


