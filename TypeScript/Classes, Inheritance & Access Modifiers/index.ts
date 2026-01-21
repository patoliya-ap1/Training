// Classes, Inheritance & Access Modifiers

import username, { PI, add } from "./mathUtils.js";

// public

class Person {
  readonly name: string;
  static email: string = "name@domain.com";
  protected age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce(): string {
    return `i am ${this.name} and ${this.age} year old.`;
  }
}

const personJohn = new Person("John", "john@email.com", 25);
console.log(personJohn.introduce());
console.log(personJohn.name);
// console.log(personJohn.email);
// console.log(personJohn.age);

// ex1 extends and public ,private ,protected

class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  public getInfo(): string {
    return `${this.name} is a ${this.species}`;
  }
  public getAge(): number {
    return this.age;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Dog");
  }
  public getDetails(): string {
    return `${this.name} is a ${this.species} and is ${this.getAge()} year old.`;
  }
}

const myDog = new Dog("Tommy", 3);
console.log(myDog.name);
console.log(myDog.getInfo());
console.log(myDog.getInfo());

// extends

class Vehicle {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  honk() {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  model: string;
  constructor(brand: string, model: string) {
    super(brand);
    this.model = model;
  }
}

// implements

interface Parent {
  print(): void;
}

class Log implements Parent {
  print() {
    console.log("implements");
  }
}

const output = new Log();
output.print();

// Modules & Namespaces

// import named and default

console.log(PI);
console.log(add(2, 3));
console.log(username);

// module resolution basics in typescript

//relative path : ./../

//non relative path

// import * as React from 'react'
