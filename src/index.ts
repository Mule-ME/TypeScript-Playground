// let age: number = 20
// if (age < 50)
//   age += 10
// console.log(age)


// //Types
// //1,any 
// // variable declared without any type and without any initialization //eg=>
// let result  //which is === let result: any


// //2, Arrays
// let numbers: number[] = [1, 2, 3]

// //3,Tuples
// //if we have a fixed number of element must have 2 input
// const myCollection: [string, number] = ["Mulualem", 1]

// //4, Enum 
// //which represent a list of related constants e.g =>

// //Don't have to use the bellow
// // const small =1 
// // const medium = 2
// // const large = 3 simply we can define these constants using enum

// //PascalCase
// enum Size { Small = 1, Medium, Large } //define it as a constant to get  the most out of it while compiling it will help as to hide abstraction of how enum define in js
// let mySize: Size = Size.Medium
// console.log(mySize) // o/p = 2

// //5, Functions
// function calculateTax(
//   income: number,
//   taxYear = 2019,
//   unUsedParam = 1  // to tackle this error turn off //"noUnusedParameters": true, 1
// ): number // to tackle this error turn off //"noImplicitReturns": true, 2.

// {

//   let x; // to tackle this error turn off //"noUnusedLocals": true, 3.
//   if (taxYear < 2022)
//     return income * 1.2
//   return income * 1.3
// }
// console.log(calculateTac(10_000)) //or
// console.log(calculateTac(10_000, 2023))


// //<-------- Type Aliases --------> 
// type Employee = {
//   readonly id: number, //readonly let us to don't update this property of the object immutable
//   name: string,
//   retire: (date: Date) => void
// }

// //6, Objects
// let employee: Employee = {
//   id: 1,
//   name: "John Doe",
//   retire: (date: Date) => {
//     console.log(date)
//   }
// }

// //<-------- Union Types -------->
// //to have more than one types on variable (for combining types)
// //but value can be only ONE of the these types
// let weights: number | string | boolean

// function kgToLbs(weight: number | string): number {

//   //Narrowing
//   if (typeof weight === 'number')
//     return weight * 2.2
//   else
//     return parseInt(weight) * 2.2

// }
// kgToLbs(10)
// kgToLbs("10")


// //<-------- Intersection Types -------->
// //to have more than one types on variable
// //but value can be all of the type types
// let value: number & string //object with two types

// //best example. 

// type Draggable = {
//   drag: () => void
// }

// type Resizable = {
//   resize: () => void
// }

// type UIWidget = Draggable & Resizable // is can be both types

// const textBox: UIWidget = {
//   drag: () => { },
//   resize: () => { }
// }


// //<-------- Literal Types -------->
// //Literal(exact, specific)
// //to limit a values we can assign to a variable
// type Quantity = 50 | 100
// let quantity: Quantity = 100

// type Metric = "cm" | "inch"


// //<-------- Nullable Types -------->
// function greet(name: string | null | undefined) {
//   if (name)
//     console.log("Hello " + name.toUpperCase())
//   else
//     console.log("Hello who are you!!!")
// }

// greet("Mulualem")
// greet(undefined)
// greet(undefined)


// //<-------- Optional chaining -------->
// //there are three area of usage 

// type Customer = {
//   birthday?: Date
// }

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(1)
// //1, Optional PROPERTY access operator
// console.log(customer?.birthday?.getFullYear())

// //2, Optional ELEMENT access operator
// // data?.[0]

// //3, Optional CALL operator
// let log: any = null;
// log("log") //our program will crush cause log null
// log?.("log") //will get undefined


// //<-------- Nullish Coalescing Operator -------->
// let speed: number | null = null
// let ride = {
//   speed: speed ?? 0
// }

// //<-------- Type Assertions  -------->
// //It didn't do any thing in compilation time it is used for us to just tell the compiler we know that specific type is what

// // => let phone = document.getElementById("phone") 
// // it just simply tell for the compiler it is HTMLElement not its specific type so if we try to access like : phone.vale, to overcome this we do.

// //  let phone = document.getElementById("phone") as HTMLInputElement
// //  phone.value

// //OR 
// let phone = <HTMLInputElement>document.getElementById("phone")



// //<-------- The unknown Type  -------->
// function render(document: unknown) {

//   //All of the bellow throw error
//   // document.move()
//   // document.fly()
//   // document.whateverWeWant()

//   //to over come the above error we use Narrowing (it is used only for primitive data types)
//   if (document === "string") {
//     document.toUpperCase()
//   }

// }

// //<-------- The never Type  -------->
// //it represent the value that NEVER occur

// function reject(message: string): never {
//   throw new Error(message)
// }

// function processEvents () :never {
//   while(true){
//     //Read a message from a queue
//   }
// }

// processEvents ()
// console.log("Hello") //this code will never execute because of the above.

import {Account} from "./objetOrientedProgramming"

Account;

