// union types (string | number)

// union

let usersData: undefined | object[];

usersData = undefined;

usersData = [{ name: "John" }, { name: "alice" }];

// intersection

type Person = {
  name: string;
  age: number;
};

type MorePerson = {
  email: string;
};

type CombinedPerson = Person & MorePerson;

const person: CombinedPerson = {
  name: "John",
  age: 22,
  email: "john@gmail.com",
};

// literal types

type Size = "S" | "M" | "L";

let size: Size = "S";
size = "S";
size = "M";
size = "L";

//Enums & Const Assertions

// enum StatusCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized,
//   Forbidden,
// }

enum Role {
  User = "USER",
  admin = "ADMIN",
}

const COLORS = ["red", "blue"] as const;

console.log(COLORS);

// let apiStatus: StatusCodes = StatusCodes.Unauthorized;

// console.log(apiStatus);
