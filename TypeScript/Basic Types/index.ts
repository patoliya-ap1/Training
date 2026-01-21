// Primitives

let name: string = "Bob";
let age: number = 22;
let isAdult: boolean = true;
let id: bigint = 9007199254740991n;
let uniqueId: symbol = Symbol("id");
let notFound: null = null;
let notAssign: undefined = undefined;

// any
let temp: any = "John";

temp = 123;

// unknown

let value: unknown;

value = 123;

if (typeof value === "number") {
  console.log(value.toFixed(2));
}

// never

function throwError(message: string): never {
  throw new Error(message);
}

// void

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("John");

// Arrays string

let tags:string[] =["ts","tsc","npx tsc --init"]

// Arrays number

let coord: [number,number] =[12.32,24.35]

// Tuples

const phone:[string,number] =['alice',76856475634]

// or

const data:null|[] = null

