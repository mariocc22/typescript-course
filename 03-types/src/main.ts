let a: number[] = [1, 2, 3];

a.push(3);
// a.push('4'); // Error

// any type can be anything but it's not recommended and not used in typescript
let b: any = 1;
b = "2";
b = true;
b = [1, 2, 3];

// void type is used for functions that don't return anything
function print(): void {
  console.log("Hello");
}

// null and undefined are subtypes of all other types
let c: null = null;
let d: undefined = undefined;

// never type is used for functions that never return anything
function throwError(): never {
  throw new Error("Error");
}

// MOST IMPORTANT - Object type is used for non-primitive types
type Person = {
  name: string;
  age: number;
  isMarried: boolean;
};
const person: Person = {
  name: "John",
  age: 30,
  isMarried: false, // Error
};

// or

// you can explicitly define the type of an object and make some of its properties optional
const teen: { name: string; age: number; isProgrammer?: boolean } = {
  name: "John",
  age: 30,
};

// types and interfaces

// usually at the top of the file you add your types
// types are also resuable and can be used in other files
type Person2 = {
  name: string;
  age: number;
  isMarried: boolean;
  friends?: string[];
  address: {
    street: string;
    city: string;
  };
};

const person2: Person2 = {
  name: "John",
  age: 30,
  isMarried: false,
  address: {
    street: "Main St",
    city: "New York",
  },
};

const person3: Person2 = {
  name: "John",
  age: 30,
  isMarried: false,
  // isProgrammer: true, // Error
  address: {
    street: "Main St",
    city: "New York",
  },
};

// interfaces are used for objects and classes, but they both work exactly the  same (Interfaces and Types)
interface Person3 {
  name: string;
  age: number;
  isMarried: boolean;
  friends?: string[];
  address: {
    street: string;
    city: string;
  };
}

// downside of interfaces is that they only work with object types
// you can't use them with primitive types
const person4: Person3 = {
  name: "John",
  age: 30,
  isMarried: false,
  address: {
    street: "Main St",
    city: "New York",
  },
};
