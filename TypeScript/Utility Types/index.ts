// Partial

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// Required

interface Car {
  make: string;
  model: string;
  milage?: number;
}

const myCar: Required<Car> = {
  make: "BMW",
  model: "X5",
  milage: 12000,
};

// Readonly

interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "John",
  age: 22,
};

// Pick

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserPreview = Pick<User, "name" | "email">;

// omit

type SafeUserInfo = Omit<User, "password">;

// record

type fruits = "apple" | "orange" | "kiwi";

interface fruitInfo {
  quantity: number;
  location: string;
}

const myFruits: Record<fruits, fruitInfo> = {
  apple: { quantity: 21, location: "delhi" },
  orange: { quantity: 13, location: "mumbai" },
  kiwi: { quantity: 8, location: "pune" },
};

// Exclude

type Primitive = string | number | boolean;

type NonString = Exclude<Primitive, string>;

// Return type

function getAge(): number {
  return 22;
}

type age = ReturnType<typeof getAge>;

// Parameters

function greet(name: string, age: number): void {}

type GreetArgs = Parameters<typeof greet>;

// Conditional & Mapped Types

type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;
type Test2 = IsString<number>;

type Num<T> =T extends number[]?number:(T extends string[]?string:never)

const num: Num<number[]> =4;

// const stringnum:Num<number>="7"

// Mapped types to transform properties

type Users={
    id:number;
    name:string;
    email:string;
}

type PartialUser ={
[P in keyof User]?: User[P]
}

type ReadonlyUser = {
   readonly [P in keyof User]:User[P]
}


