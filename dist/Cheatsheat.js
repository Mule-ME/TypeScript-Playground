// # TypeScript CheatSheet

// All right reserved to [CodeCademy.com](https://www.codecademy.com/courses/learn-typescript) and [dotnettricks.com](https://www.dotnettricks.com/)

// __Notice:__ This started as a Cheat Sheet, then extended to be so long! (I didn't expected that!).

// ## Types

// ### Types (Detail)

// #### Whats is TypeScript

// Microsoft developed TypeScript and released publicly in 2012 to blend the flexibility of JavaScript with the advantages of a stricter language.
// TypeScript is a programming language that adds types to JavaScript. It allows us to write JavaScript with a set of tools called a type system that can spot potential bugs in, clarify the structure of, and help refactor our code. In addition, TypeScript added newer JavaScript language features, such as arrow functions and classes, years before they were added to JavaScript officially.

// #### Type Inferences

//  when we declare a variable with an initial value, the variable can never be reassigned a value of a different data type.

// TypeScript recognizes JavaScript’s built-in “primitive” data types:

// ```ts
// "Hello, world!"  // string
// 42               // number
// true             // boolean
// null
// undefined
// ```

// ```ts
// let order = 'first';
// order = 1;  // will not compile
// ```

// #### Type Shapes

// TypeScript knows the shape of an object—what member properties it does or doesn’t contain. TypeScript will log an error if the code attempts to access members of an object known not to exist. It may even suggest possible corrections.

// ```ts
// let firstName = 'muriel!';

// console.log(firstName.toUppercase());

// // error: Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
// ```

// #### Any

// When a variable is declared without being assigned an initial value, TypeScript considers it to be of type any. A variable of this type can be reassigned without generating any error from TypeScript.

// ```ts
// let onOrOff; // same as writing: let onOrOff: any;

// onOrOff = 1;
// onOrOff = false;
// ```

// #### Variable Type Annotations

// We can tell TypeScript what type something is or will be by using a type annotation.

// ```ts
// let    num: number;
// let    str: string;
// let   bool: boolean;
// let random: any;
// ```

// #### Other Types to Know About

// There are some additional types that you can use everywhere, but these are especially relevant in the context of functions.

// ##### void

// void represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any return statements, or doesn’t return any explicit value from those return statements:

// ```ts
// // The inferred return type is void
// function noop() {
//   return;
// }
// ```

// In JavaScript, a function that doesn’t return any value will implicitly return the value undefined. However, void and undefined are not the same thing in TypeScript.

// ##### object

// The special type object refers to any value that isn’t a primitive (string, number, boolean, symbol, null, or undefined). This is different from the empty object type { }, and also different from the global type Object. It’s very likely you will never use Object.

// >object is not Object. Always use object!

// Note that in JavaScript, function values are objects: They have properties, have `Object.prototype` in their prototype chain, are `instanceof` Object, you can call `Object.keys` on them, and so on. For this reason, function types are considered to be objects in TypeScript.

// ##### unknown

// The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:

// ```ts
// function f1(a: any) {
//   a.b(); // OK
// }

// function f2(a: unknown) {
//   a.b(); // Object is of type 'unknown'.
// }
// ```

// This is useful when describing function types because you can describe functions that accept any value without having any values in your function body.

// Conversely, you can describe a function that returns a value of unknown type:

// ```ts
// function safeParse(s: string): unknown {
//   return JSON.parse(s);
// }

// // Need to be careful with 'obj'!
// const obj = safeParse(someRandomString);
// ```

// ##### never

// Some functions never return a value:

// ```ts
// function fail(msg: string): never {
//   throw new Error(msg);
// }
// ```

// The `never` type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

// never also appears when TypeScript determines there’s nothing left in a union.

// ```ts
// function fn(x: string | number) {
//   if (typeof x === "string") {
//     // do something
//   } else if (typeof x === "number") {
//     // do something else
//   } else {
//     x; // has type 'never'!
//   }
// }
// ```

// ##### Function

// The global type Function describes properties like bind, call, apply, and others present on all function values in JavaScript. It also has the special property that values of type Function can always be called; these calls return any:

// ```ts
// function doSomething(f: Function) {
//   f(1, 2, 3);
// }
// ```

// This is an untyped function call and is generally best avoided because of the unsafe any return type.

// If you need to accept an arbitrary function but don’t intend to call it, the type () => void is generally safer.

// ### The `tsconfig.json` File

// The `tsconfig.json` file is always placed in the root of your project and you can customize what rules you want the TypeScript compiler to enforce.

// ```json
// {
//   "compilerOptions": {
//     "target": "es2017",
//     "module": "commonjs",
//     "strictNullChecks": true
//   },
//   "include": ["**/*.ts"]
// }
// ```

// use `tsc --init` to create generic `tsconfig.json` file

// ## Functions

// ### Parameter Type Annotations

// ```ts
// function greet(name: string) {
//   console.log(`Hello, ${name}!`);
// }

// greet('Katz'); // Prints: Hello, Katz

// greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'
// ```

// ### Optional Parameters

// ```ts
// function greet(name?: string) {
//   console.log(`Hello, ${name|| 'Anonymous'}!`);
// }

// greet(); // Prints: Hello, Anonymous!
// ```

// ### Default Parameters

// If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value’s type.

// ```ts
// function greet(name = 'Anonymous') {
//   console.log(`Hello, ${name}!`);
// }
// ```

// ### Inferring Return Types

// TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s return statements.

// ### Explicit Return Types

// ```ts
// function createGreeting(name?: string): string {
//   if (name) {
//     return `Hello, ${name}!`;
//   }

//   return undefined;
//   //Typescript Error: Type 'undefined' is not assignable to type 'string'.
// };
// ```

// We can also explicitly state return types for arrow functions

// ```ts
// const createArrowGreeting = (name?: string): string => {
//     if (name) {
//         return `Hello, ${name}!`;
//     }

//     return undefined;
//     // Typescript Error: Type 'undefined' is not assignable to type 'string'.
// };
// ```

// ### Void Return Type

// ```ts
// function logGreeting(name:string): void{
//   console.log(`Hello, ${name}!`)
// }
// ```

// ### Documenting Functions

// A documentation comment is denoted with the first line `/**` and a final line `*/`. It’s common for each line within the comment to start with an asterisk (`*`):

// ```ts
// /**
// * This is a documentation comment
// */
// ```

// We can use `@param` to describe each of the function’s parameters, and we can use `@returns` to describe what the function returns:

// ```ts
//   /**
//    * Returns the sum of two numbers.
//    *
//    * @param x - The first input number
//    * @param y - The second input number
//    * @returns The sum of `x` and `y`
//    *
//    */
//   function getSum(x: number, y: number): number {
//     return x + y;
//   }
// ```

// ## Complex Types

// ### Arrays

// #### Array Type Annotations

// The TypeScript type annotation for array types is fairly straightforward: we put `[]` after the element type.

// ```ts
// let names: string[] = ['Danny', 'Samantha'];
// ```

// An alternative method is to use the `Array<T>` syntax, where `T` stands for the type.

// ```ts
// let names: Array<string> = ['Danny', 'Samantha'];
// names.push(666) // Type Error!
// ```

// #### Multi-dimensional Arrays

// ```ts
// let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];
// ```

// Think of the `string[][]` above as short for `(string[])[]`

// The empty array `([])` is compatible with any array type:

// ```ts
// let names: string[] = []; // No type errors.
// let numbers: number[] = []; // No type errors.
// names.push('Isabella');
// numbers.push(30);
// ```

// ```ts
// let bestNumbers: number[] = [7,77,4];
// let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];
// ```

// #### Tuples

// A Tuple is An array that has a *fixed size* of similar or different element types *arranged in a particular sequence*.

// ```ts
// let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false];
// ```

// Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met:

// ```ts
// let numbersTuple: [number, number, number] = [1,2,3,4];
// // Type Error! numbersTuple should only have three elements.

// let mixedTuple: [number, string, boolean] = ['hi', 3, true]
// // Type Error! The first elements should be a number, the second a string, and the third a boolean.
// ```

// Although a tuple may have all elements of the same type and resembles an array, a tuple is still its own type. A tuple cannot expand, while an array can. Hence, assigning an array to a tuple that matches the same type and length will generate an error.

// ```ts
// let tup: [string, string] = ['hi', 'bye'];
// let arr: string[] = ['there','there'];
// tup = ['there', 'there']; // No Errors.
// tup = arr; // Type Error! An array cannot be assigned to a tuple.
// ```

// #### Array Type Inference

// TypeScript can infer variable types from initial values and return statements. Even still, we may not know exactly what type inference to expect when dealing with arrays.

// ```ts
// let examAnswers = [true, false, false];
// examAnswers[3] = true; // No type error.
// ```

// The JavaScript method, `.concat()` can be called on a TypeScript tuple, and this produces a new array type instead of a tuple.

// ```ts
// let tup: [number, number, number] = [1,2,3];
// let concatResult = tup.concat([4,5,6]);
// ```

// #### Rest Parameters

// A rest parameter inside a function is implicitly assigned an array type of `any[]` by TypeScript.

// Explicitly type annotating a rest parameter of a function will alert TypeScript to check for type inconsistency between the rest parameter and the function call arguments.

// ```ts
// function smush(firstString, ...otherStrings: string[]){
//   /*rest of function*/
// }

// function addPower(p: number, ...numsToAdd: number[]): number{
//   let answer = 0;
//   for(let i = 0; i < numsToAdd.length; i++){
//     answer += numsToAdd[i] ** p;
//   }
//   return answer;
// }
// ```

// #### Spread Syntax

// Spread syntax can be used with a tuple as an argument to a function call whose parameter types match those of the tuple elements.

// ```ts
// function gpsNavigate(
//   startLatitudeDegrees: number,
//   startLatitudeMinutes: number,
//   startNorthOrSouth: string,
//   startLongitudeDegrees: number,
//   startLongitudeMinutes: number,
//   startEastOrWest: string,
//   endLatitudeDegrees: number,
//   endLatitudeMinutes: number,
//   endNorthOrSouth: string,
//   endLongitudeDegrees: number,
//   endLongitudeMinutes: number,
//   endEastOrWest: string
// ) {
//   /* navigation subroutine here */
// }

// let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
// let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];

// gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
// // And by the way, this makes the return trip really convenient to compute too:
// gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
// // If there is a return trip . . .
// ```

// ### Custom Types

// #### Enums

// Enums are a special type in TypeScript which allow us to store a set of constants/keywords and associate them with a numeric value/String

// ```ts
// enum Direction {
//   North,
//   South,
//   East,
//   West
// }

// let whichWayToArcticOcean: Direction;
// whichWayToArcticOcean = Direction.North; // No type error.
// whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
// whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead.
// ```

// Under the hood, TypeScript processes these kinds of enum types using numbers. Enum values are assigned a numerical value according to their listed order. The first value is assigned a number of `0`, the second a number of `1`, and onwards.

// ```ts
// enum Weekend {
//   Friday = 5,
//   Saturday,
//   Sunday
// };

// // Assign a valid value of Weekend
// const today: Weekend = 7;       // No error
// console.log(`Today is the ${today}th day of the week!`);
// // Prints "Today is the 7th day of the week!"
// ```

// We can change the starting number, writing something like

// ```ts
// enum Direction {
//   North = 7,
//   South,
//   East,
//   West
// }
// ```

// Here, Direction.North, Direction.South, Direction.East, and Direction.West are equal to 7, 8, 9, and 10, respectively.

// We can also specify all numbers separately, if needed:

// ```ts
// enum Grades {
//   A = 90,
//   B = 80,
//   C = 70,
//   D = 60
// }
// ```

// ```ts
// enum Pet {
//   Hamster,
//   Rat,
//   Chinchilla,
//   Tarantula
// }

// let ordersArrayTS: [Pet, number][] = [
//   [Pet.Rat, 2],
//   [Pet.Chinchilla, 1],
//   [Pet.Hamster, 2],
//   [Pet.Chinchilla, 50]
// ];
// ```

// #### String Enums vs. Numeric Enums

// TypeScript also allows us to use enums based on strings, referred to as string enums. They are defined very similarly:

// ```ts
// enum DirectionNumber { North, South, East, West }
// enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
// ```

// We recommend to always use string enums because numeric enums allow for some behaviors that can let bugs sneak into our code. For example, numbers can be assigned directly to numeric enum variables:

// ```ts
// let whichWayToAntarctica: DirectionNumber;
// whichWayToAntarctica = 1; // Valid TypeScript code.
// whichWayToAntarctica = DirectionNumber.South; // Valid, equivalent to the above line.
// ```

// Strangely, even assigning arbitrary numbers, as in whichWayToAntarctica = 943205, will not lead to type errors.

// #### Object Types

// Here’s a type annotation for an object meant to represent a person:

// ```ts
// let aPerson: {name: string, age: number};
// ```

// Notice that the variable `aPerson` has yet to be assigned a value. Trying to assign a value to `aPerson` that doesn’t have name and age properties of the specified types will lead to a type error:

// ```ts
// aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
// aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property.
// aPerson = {name: 'User McCodecad', age: 22}; // Valid code.
// ```

// TypeScript places no restrictions on the types of an object’s properties. They can be enums, arrays, and even other object types!

// ```ts
// let aCompany: {
//   companyName: string;
//   boss: { name: string; age: number };
//   employees: { name: string; age: number }[];
//   employeeOfTheMonth: { name: string; age: number };
//   moneyEarned: number;
// };
// ```

// #### Type Aliases

// These are alternative type names that we choose for convenience. We use the format type `<alias name> = <type>`:

// ```ts
// type MyString = string;
// let myVar: MyString = 'Hi'; // Valid code.
// ```

// Type aliases are truly useful for referring to complicated types that need to be repeated, especially object types and tuple types. Recall our earlier company example:

// ```ts
// let aCompany: {
//   companyName: string,
//   boss:               { name: string, age: number },
//   employees:          { name: string, age: number }[],
//   employeeOfTheMonth: { name: string, age: number },
//   moneyEarned: number
// };

// type Person = { name: string, age: number };
// let aCompany: {
//   companyName: string,
//   boss:               Person,
//   employees:          Person[],
//   employeeOfTheMonth: Person,
//   moneyEarned: number
// };
// ```

// TypeScript aliases are nothing more than names. They have absolutely no influence over how types work. For example, the following code does not lead to type errors:

// ```ts
// type MyString = string;
// type MyOtherString = string;
// let firstString: MyString = 'test';
// let secondString: MyOtherString = firstString; // Valid code.
// ```

// #### Function Types

// ```ts
// let greet: Function;
// ```

// In TypeScript we can precisely control the kinds of functions assignable to a variable. We do this using function types, which specify the argument types and return type of a function.

// ```ts
// type StringsToNumberFunction = (arg0: string, arg1: string) => number;

// let myFunc: StringsToNumberFunction;
// myFunc = function (firstName: string, lastName: string) {
//   return firstName.length + lastName.length;
// };

// myFunc = function (whatever: string, blah: string) {
//   return whatever.length - blah.length;
// };
// // Neither of these assignments results in a type error.

// type StringToNumberFunction = (string) => number; // NO, No parameter names!
// type StringToNumberFunction = arg: string=>number; // NO, No parentheses
// ```

// Using Typed functions for callbacks

// ```ts
// function multiply(a, b) { return a * b; }

// type OperatorFunction = (arg0: number, arg1:number) => number;

// function mathTutor(operationCallback: OperatorFunction) {
//   let value25 = operationCallback(2, 5);
//   console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
// }
// ```

// #### Generic Types

// Generics give us the power to define our own collections of object types. Here’s an example:

// ```ts
// type Human = {name: string, job: string};

// type Family<T> = {
//   parents: [T, T], mate: T, children: T[]
// };
// // Writing T is just a convention. We could just as easily use S or GenericType.

// let aStringFamily: Family<string> = {
//   parents: ['stern string', 'nice string'],
//   mate: 'string next door',
//   children: ['stringy', 'stringo', 'stringina', 'stringolio']
// };

// let aFamily: Family<Human> = {
//   parents: [
//     {name: 'Mom', job: 'software engineer'},
//     {name: 'Dad', job: 'coding engineer'}
//   ],
//   mate: {name: 'Matesky', job: 'engineering coder'},
//   children: [{name: 'Babesky', job: 'none'}]
// };
// ```

// #### Generic Functions

// ```js
// function getFilledArray(value, n) {
//   return Array(n).fill(value);
// }
// ```

// ```ts
// function getFilledArray<T>(value: T, n: number): T[] {
//   return Array(n).fill(value);
// }

// getFilledArray<string>('cheese', 3);
// ```

// ```ts
// const addUID = <T extends { name: string }> (obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...ob, uid };
// }

// let docOne = addUID( { name: 'yoshi', age: 40 } );
// ```

// #### Generic Interfaces

// ```ts
// interface Resourse<T> {
//   uid: 1;
//   resourseName: string;
//   data: T
// }

// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'Shanioob' }
// }

// const docFour: Resourse<string[]> = {
//   uid: 2,
//   resourceName: 'shoppingList',
//   data: [ 'item1', 'item2', 'item3' ]
// }
// ```

// ## Union Types

// Type Specific ...................... Union ...................... Any
// ![Union Types](https://content.codecademy.com/courses/learn-typescript/union_diagram.svg)

// ### Defining Unions

// ```ts
// let ID: string | number;

// // number
// ID = 1;

// // or string
// ID = '001';
// ```

// ```ts
// function getMarginLeft(margin: string | number) {
//   return { 'marginLeft': margin };
// }
// ```

// ### Union Type Narrowing

// Type narrowing allows us to use unions, then perform type-specific logic without TypeScript getting in the way.

// ```ts
// function getMarginLeft(margin: string | number) {
//   // margin may be a string or number here

//   if (typeof margin === 'string') {
//     return margin.toLowerCase();
//   }
// }
// ```

// If we tried to call `margin.toLowerCase()` outside of the string type guard, TypeScript would complain that the `.toLowerCase()` method does not exist on number types. This error would occur because margin is typed as a `string | number` union.

// ### Inferred Union Return Types

// TypeScript will look at the contents of a function and infer which types the function can return. If there are multiple possible return types, TypeScript will infer the return type as a union.

// ```ts
// function getBook() {
//   try {
//     return getBookFromServer();
//   } catch (error) {
//     return `Something went wrong: ${error}`;
//   }
// }
// ```

// If the call is successful, the function will return a `Book` type describing a book. If the call fails, the function will return a string. `getBook()` can return a `Book` or `string` type, TypeScript infers the return type as the union `Book | string`. Since TypeScript can infer the function’s return type, there’s no need for us to manually define it.

// ### Unions and Arrays

// To create a union that supports multiple types for an array’s values, wrap the union in parentheses `(string | number)`, then use array notation `[]`.

// ```ts
// const dateNumber = new Date().getTime(); // returns a number
// const dateString = new Date().toString(); // returns a string

// const timesList: (string | number)[] = [dateNumber, dateString];
// ```

// ### Common Key Value Pairs

// When we put type members in a union, TypeScript will only allow us to use the common methods and properties that all members of the union share

// ```ts
// const batteryStatus: boolean | number = false;

// batteryStatus.toString(); // No TypeScript error
// batteryStatus.toFixed(2); // TypeScript error
// ```

// This rule also applies to type objects that we define.

// ```ts
// type Goose = {
//   isPettable: boolean;
//   hasFeathers: boolean;
//   canThwartAPicnic: boolean;
// }

// type Moose = {
//   isPettable: boolean;
//   hasHoofs: boolean;
// }

// const pettingZooAnimal: Goose | Moose = { isPettable: true };

// console.log(pettingZooAnimal.isPettable); // No TypeScript error
// console.log(pettingZooAnimal.hasHoofs); // TypeScript error
// ```

// ### Unions with Literal Types

// ```ts
// type Color = 'green' | 'yellow' | 'red';

// function changeLight(color: Color) {
//   // ...
// }
// ```

// ## Type Narrowing

// ### Type guards

// One way that TypeScript can narrow a type is with a conditional statement that checks if a variable is a specific type. This pattern is called a type guard. Type guards can use a variety of operators that check for a variable’s type. One operator we can use is `typeof`. For example:

// ```ts
// function formatDate(date: string | number) {
//   // date can be a number or string here

//   if (typeof date === 'string') {
//     // date must be a string type
//   }
// }
// ```

// ### Using `in` with Type Guards

// While using `typeof` can get us pretty far, sometimes we want to see if a specific method exists on a type instead of a type like 'string'. That’s where the in operator comes into play. The `in` operator checks if a property exists on an object itself or anywhere within its prototype chain.

// ```ts
// type Tennis = {
//   serve: () => void;
// }

// type Soccer = {
//   kick: () => void;
// }

// function play(sport: Tennis | Soccer) {
//   if ('serve' in sport) {
//     return sport.serve();
//   } else if ('kick' in sport) {
//     return sport.kick();
//   }
// }
// ```

// ### Narrowing with `else`

// It turns out that TypeScript can recognize the `else` block of an `if/else` statement as being the opposite type guard check of the if statement’s type guard check. For example:

// ```ts
// function formatPadding(padding: string | number) {
//   if (typeof padding === 'string') {
//     return padding.toLowerCase();
//   } else {
//     return `${padding}px`;
//   }
// }
// ```

// ### Narrowing After a Type Guard

// TypeScript’s ability to infer types after a type guard stretches even further than inferring the type within an else statement. TypeScript can also type narrow without an else statement, provided that there’s a return statement within the type guard. Take a look at this example:

// ```ts
// type Tea = {
//   steep: () => string;
// }

// type Coffee = {
//   pourOver: () => string;
// }

// function brew(beverage: Coffee | Tea) {
//   if ('steep' in beverage) {
//     return beverage.steep();
//   }

//   return beverage.pourOver();
// }
// ```

// ## Advanced Object Types

// ### Interfaces and Types

// Here’s a type that you’ve seen before:

// ```ts
// type Mail = {
//   postagePrice: number;
//   address: string;
// }

// const catalog: Mail = ...
// ```

// And here is an identical type that utilizes interface:

// ```ts
// interface Mail {
//   postagePrice: number;
//   address: string;
// }

// const catalog: Mail = ...
// ```

// In this example, we used both a type and an interface to create a typed object named Mail. The syntaxes for type and interface are slightly different, since interface does not require an equals sign `=` before the typed object.
// Functionally, the two Mail types in the example are identical: both will enforce the typed object at compile time when typing a variable.

// The biggest difference between interface and type is that interface can only be used to type objects, while type can be used to type objects, primitives, and more.

// ### Interfaces and Classes

// The interface keyword in TypeScript is especially good for adding types to a class. Since interface is constrained to typed objects and using class is a way to program with objects, interface and class are a great match.

// TypeScript gives us the ability to apply a type to an object/class with the implements keyword, like this:

// ```ts
// interface Robot {
//   identify: (id: number) => void;
// }

// class OneSeries implements Robot {
//   identify(id: number) {
//     console.log(`beep! I'm ${id.toFixed(2)}.`);
//   }

//   answerQuestion() {
//     console.log('42!');
//   }
// }
// ```

// ### Deep Types

// ```ts
// interface Robot {
//   about: {
//     general: {
//       id: number;
//       name: string;
//     };
//   };
//   getRobotId: () => string;
// }

// class OneSeries implements Robot {
//   about;

//   constructor(props: { general: { id: number; name: string; } }) {
//     this.about = props;
//   }

//   getRobotId() {
//     return `ID: ${this.about.general.id}`;
//   }
// }
// ```

// ### Composed Types

// TypeScript allows us to compose types. We can define multiple types and reference them inside other types.

// ```ts
// interface About {
//   general: General;
// }

// interface General {
//   id: number;
//   name: string;
//   version: Version;
// }

// interface Version {
//   versionNumber: number;
// }
// ```

// Composing types together is an essential way to keep our code organized and flexible.

// ### Extending Interfaces

// ```ts
// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// const mySquare: Square = { sideLength: 10, color: 'blue' };
// ```

// ### Index Signatures

// When typing objects in TypeScript, sometimes it’s not possible to know the property names for an object, like when we get back information from an outside data source/API. While we may not know the exact property names at compile-time, we may know what the data will look like in general. In that case, it’s useful to write an object type that allows us to include a variable name for the property name. This feature is called index signatures.

// ```ts
// {
//   '40.712776': true;
//   '41.203323': true;
//   '40.417286': false;
// }

// interface SolarEclipse {
//   [latitude: string]: boolean;
// }
// ```

// In the `[latitude: string]` syntax, the latitude name is purely for us, the developer, as a human-readable name that will show up in potential error messages later.

// ### Optional Type Members

// TypeScript allows us to make some type members optional. Take a look at this code:

// ```ts
// interface OptionsType {
//   name: string;
//   size?: string;
// }

// function listFile(options: OptionsType) {
//   let fileName = options.name;

//   if (options.size) {
//     fileName = `${fileName}: ${options.size}`;
//   }

//   return fileName;
// }
// ```

// The optional parameter allows us to call `listFile()` with a parameter that does not include a size property at all, like this:

// ```ts
// listFile({ name: 'readme.txt' })
// ```

// ## Access Modifiers

// TypeScript supports access modifiers at the class level. TypeScript supports three access modifiers - *public*, *private*, and *protected*.

// - *Public* - By default, members (properties and methods) of TypeScript class are public - so you don’t need to prefix members with the public keyword. Public members are accessible everywhere without restrictions

// - *Private* - A private member cannot be accessed outside of its containing class. Private members can be accessed only within the class.

// - *Protected* - A protected member cannot be accessed outside of its containing class. Protected members can be accessed only within the class and by the instance of its sub/child class.

// ```ts
// class Foo {
//   private x: number;
//   protected y: number;
//   public z: number;

//   saveData(foo: Foo): void {
//     this.x = 1; // ok
//     this.y = 1; // ok
//     this.z = 1; // ok

//     foo.x = 1; // ok
//     foo.y = 1; // ok
//     foo.z = 1; // ok
//   }
// }

// class Bar extends Foo {
//   getData(foo: Foo, bar: Bar) {
//     this.y = 1; // ok
//     this.z = 1; // ok

//     bar.y = 1; // ok
//     bar.z = 1; // ok
//     foo.z = 1; // ok

//     foo.x = 1; // Error, x only accessible within A
//     bar.x = 1; // Error, x only accessible within A
//     bar.y = 1; // Error, y only accessible through instance of B
//   }
// }
// ```

// ### Readonly Modifiers

// TypeScript supports readonly modifiers on property level by using the readonly keyword. The Readonly properties must be initialized at their declaration or in the constructor.

// ```ts
// class Company {
//   readonly country: string = 'India';
//   readonly name: string;

//   constructor(_name: string) {
//     this.name = _name;
//   }
//   showDetails() {
//     console.log(this.name + ' : ' + this.country);
//   }
// }

// let c1 = new Company('Dot Net Tricks Innovation');
// c1.showDetails(); // Dot Net Tricks Innovation : India

// c1.name = 'TCS'; //Error, name can be initialized only within constructor

// ```

// ### Accessors

// Just like C# properties accessors, TypeScript supports get/set accessors to access and to set the value to a member of an object. This way give us control over how a member of an object is accessed and set.

// ```ts
// class Employee {
//   private passcode: string;
//   private _fullName: string;

//   constructor(_passcode?: string) {
//     this.passcode = _passcode;
//   }

//   get fullName(): string {
//     //accessing value
//     return this._fullName;
//   }

//   set fullName(newName: string) {
//     //setting value
//     if (this.passcode == 'secret_passcode') {
//       this._fullName = newName;
//     } else {
//       console.log('Error: Unauthorized update of employee!');
//     }
//   }
// }

// let e1 = new Employee('secret_passcode');
// e1.fullName = 'Shailendra Chauhan';
// if (e1.fullName) {
//   console.log(e1.fullName);
// }

// let e2 = new Employee();
// e2.fullName = 'Kanishk Puri'; //Error: Unauthorized update of employee
// if (e2.fullName) {
//   console.log(e1.fullName);
// }
// ```

// ## Modules and Namespaces

// ### Export

// In TypeScript, you can export any declaration such as a variable, function, class, type alias, or interface by using the export keyword.

// ```ts myModule.ts
// //exporting Employee type
// export class Employee {
//   constructor(private firstName: string, private lastName: string) {}
//   showDetails() {
//     return this.firstName + ', ' + this.lastName;
//   }
// }

// //exporting Student type
// export class Student {
//   constructor(private rollNo: number, private name: string) {}
//   showDetails() {
//     return this.rollNo + ', ' + this.name;
//   }
// }
// ```

// ### Import

// In TypeScript, you can import an exported declaration by using import keyword. Let’s import the myModule file types within app file as given below:

// ```ts app.ts
// //importing the exporting types Student and Employee from myModule file
// import { Student, Employee } from './myModule';

// let st = new Student(1, 'Mohan');
// let result1 = st.showDetails();
// console.log('Student Details :' + result1);

// let emp = new Employee('Shailendra', 'Chauhan');
// let result2 = emp.showDetails();
// console.log('Employee Details :' + result2);
// ```

// #### Re-Export

// ```ts re_export.ts
// //re-exporting types Student as st from myModule file
// export { Student as st } from "./myModule";

// export const numberRegexp = /^[0-9]+$/;
// ```

// ### Namespaces

// Namespaces are simply named JavaScript objects in the global scope. Namespaces are used for grouping of variables, functions, objects, classes, and interfaces, so that you can avoid the naming collisions. Namespaces are declared using the namespace keyword.

// ```ts namespace.ts
// namespace Gurukulsight {
//   //exporting outside the namespace body
//   export class Student {
//     constructor(private rollNo: number, private name: string) {}
//     showDetails() {
//       return this.rollNo + ', ' + this.name;
//     }
//   }
//   // Only available inside the namespace body
//   let maxCount: number = 100;
//   class Employee {
//     constructor(private firstName: string, private lastName: string) {}
//     showDetails() {
//       return this.firstName + ', ' + this.lastName;
//     }
//   }
// }

// namespace DotNetTricks {
//   //accessing Gurukulsight namespace student class
//   import Student = Gurukulsight.Student;

//   export class Person {
//     constructor(private firstName: string, private lastName: string) {}
//     fullName(): string {
//       return this.firstName + ' ' + this.lastName;
//     }
//   }
//   //creating object of student class
//   let st = new Student(1, 'Mohan');
//   st.showDetails();
// }
// ```

// #### Important Information

// - A namespace can be described in multiple files and allow to keep each file to a maintainable size.

// - The members of a module body, you can access only within that module body.

// - To make a member available outside the namespace body, you need to prefix the member with the export keyword.

// ### Export and Import Namespaces

// In TypeScript, you can export a namespace by prefixing export keyword and to use its members use import keyword. Also, to make a member available outside the namespace body, you need to prefix that member with the export keyword.

// ```ts gurukulsight.ts
// export namespace Gurukulsight {
//   //exporting outside the namespace body
//   export class Student {
//     constructor(private rollNo: number, private name: string) {}
//     showDetails() {
//       return this.rollNo + ', ' + this.name;
//     }
//   }
//   // Only available inside the namespace body
//   let maxCount: number = 100;
//   class Employee {
//     constructor(private firstName: string, private lastName: string) {}
//     showDetails() {
//       return this.firstName + ', ' + this.lastName;
//     }
//   }
// }
// ```

// ```ts main.ts
// //importing the namespace
// import { Gurukulsight } from './namespace';

// //accessing Gurukulsight namespace student class
// import Student = Gurukulsight.Student;

// //creating object of student class
// let st = new Student(1, 'Mohan');
// st.showDetails();
// ```

// ## Interface in TypeScript

// Interface acts as a contract between itself and any class which implements it. It means a class that implements an interface is bound to implement all its members. An interface cannot be instantiated but it can be referenced by the class object which implements it. Interfaces can be used to represent any non-primitive JavaScript object.

// ```ts interface.ts
// interface IHuman {
//   firstName: string;
//   lastName: string;
// }

// class Employee implements IHuman {
//   constructor(public firstName: string, public lastName: string) {}
// }
// ```

// ### Use of Interfaces

// Interfaces are particularly useful for validating the required structure of properties, objects passed as parameters, and objects returned from functions.

// Also, Interfaces are only TypeScript compile-time construct and compiled JavaScript code have no such representation.

// ### Interface Inheritance

// An interface can be inherited from zero or more base types. The base type can be a class or interface.

// ```ts Interface1.ts
// interface IStore {
//   Read(): void;
//   Write(): void;
// }

// interface ICompress {
//   Compress(): void;
//   Decompress(): void;
// }

// interface IDocument extends IStore, ICompress {
//   Print(): void;
// }
// ```

// #### Class Implementing Interfaces

// Just like C# and Java, a TypeScript class can implement multiple interfaces.

// ```ts Interface2.ts
// interface IStore {
//   Read(): void;
//   Write(): void;
// }

// interface ICompress {
//   Compress(): void;
//   Decompress(): void;
// }

// class DocStore implements IStore, ICompress {
//   Read(): void { console.log('Read Method for IStore'); }
//   Write(): void { console.log('Write Method for IStore'); }
//   Compress(): void { console.log('Compress Method for ICompress'); }
//   Decompress(): void { console.log('Decompress Method for ICompress'); }
// }

// let I1: IStore = new DocStore();
// //can access only IStore members
// I1.Read();
// I1.Write();

// let I2: ICompress = new DocStore();
// //can access only ICompress members
// I2.Compress();
// I2.Decompress();
// ```

// ### Interface Extending Class

// Unlike C# or Java, TypeScript interfaces can inherit (extend) classes. When an interface extends a class, type it inherits the members of the class but not their implementations i.e. the members’ declaration is available in interface. Also, anything added to the class will also be added to the interface.

// ```ts Interface.ts
// class Store {
//   Read(): void {
//     console.log('Read Method for Store');
//   }
//   Write(): void {
//     console.log('Write Method for Store');
//   }
// }

// interface IDocStore extends Store {
//   //inherited Read and Write methods with declaration only
// }

// class Doc implements IDocStore {
//   //mandatory to implement Read and Write methods of IDocStore
//   Read(): void {
//     console.log('Read Method for Doc');
//   }
//   Write(): void {
//     console.log('Write Method for Doc');
//   }
// }

// let I1: IDocStore = new Doc();
// I1.Read();
// I1.Write();
// ```