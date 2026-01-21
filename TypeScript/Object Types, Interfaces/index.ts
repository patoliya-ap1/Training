// Object Types, Interfaces & Type Aliases

// interface vs type define structure of object

type Person = {
  name: string;
  age: number;
};

type MorePerson = {
  email: string;
};

type CombinedPerson = Person & MorePerson;

const john: CombinedPerson = {
  name: "John",
  age: 22,
  email: "john@gmai.com",
};

//interface with optional ?

interface Person2 {
  name: string;
  age: number;
}

interface Person2 {
  email: string;
  address?: string;
}

const alice: Person2 = {
  name: "Alice",
  age: 23,
  email: "alice@gmail.com",
};

// union ,intersection

//union
let phone: number | string;

//intersection and Optional ? and readonly

type Product = {
  readonly title: string;
};
type ProductQty = {
  quantity: number;
  description?: string;
};

type CombinedProduct = Product & ProductQty;

const product: CombinedProduct = {
  title: "Apple",
  quantity: 10,
};

// revise

interface Nums{
   readonly a:number,
   readonly b:number
}


const add:Nums={a:4,b:5}

// add.a=20

console.log(add.a,add.b)

