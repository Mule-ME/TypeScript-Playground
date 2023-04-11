//<-------* Understanding the problem *--------->
// we need a generic meaning  common reusable solutions

//<-------* Generic Class *--------->
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair("1", "Apple"); // === let pair = new KeyValuePair<string, string>("1", "Apple")
pair.value.length;

//<-------* Generic Functions *--------->
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils.wrapInArray(1);

//<-------* ***Generic Interfaces*** *--------->
//let's say we have two endpoints in our website and we have two response types.
// http://mywebsite.com/users
// http://mywebsite.com/products
//we have two type of responses from our api's so we can use Generic Interfaces

interface Result<T> {
  data: T | null;
  error: string | null;
}

//here is our function to fetch data
function fetch<T>(url: string): Result<T> {
  return {
    data: null,
    error: null,
  };
}

//here is our interfaces for User and Products
interface User {
  username: string;
}

interface Products {
  title: string;
}

let users = fetch<User>("url");
let products = fetch<Products>("url");

console.log(users.data?.username);
console.log(products.data?.title);

//<-------* Generic Constraints *--------->
//limiting what are the possible type of our generic values <T>,then if we pass any type outside our scope is throws an error

function echo<T extends number | string>(value: T): T {
  return value;
}

//possible constraints
// <T extends Interface>
// <T extends extended classes or extended interfaces from parent interface>
// <T extends Objects>
// <T extends Primitive data types>

//<-------* ***Extending Generic Classes*** *--------->
//when we dialing with extending generic classes we have 3 possible extensions.
//1, Pass on the generic type parameter
//2, Restrict the generic type parameter
//3, Fix or terminate the generic type parameter

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = []; // initialize it instead of using constructor cause we don need it to instantiate it
  add(obj: T): void {
    this._objects.push(obj);
  }
}

//1, Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
store.compress();

//2, Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

//3, Fix or terminate the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

//<-------* ***The keyof Operator*** *--------->
// keyof return a union of properties of a given type

class StoreOne<T> {
  protected _objects: T[] = []; // initialize it instead of using constructor cause we don need it to instantiate it
  add(obj: T): void {
    this._objects.push(obj);
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let storeToTestKEYOF = new StoreOne<Product>();
storeToTestKEYOF.add({ name: "Laptop", price: 1000 });
storeToTestKEYOF.find("name", "Laptop"), storeToTestKEYOF.find("price", 1000);
// storeToTestKEYOF.find("nonExistingProperty", "3424") //it creates compilation error

//<-------* Type Mapping *--------->
//base a type in to another type
//refer on typescript doc. Utility types

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<Product> = {
  name: "Bag",
  price: 1,
};
