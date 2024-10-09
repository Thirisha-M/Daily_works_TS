// syntax for Type Alias

type Name = number;

let firstName: Name;
let lastName: Name;
console.log()

//object for Type Alias

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: 'John',
  age: 25
};
console.log(person);

//intersection for Type Alias

type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: "Joe",
  age: 25,
  email: "joe@example.com",
  phone: "(408)-123-4567"
};

console.log(candidate);