let age: number = 20
if (age < 50)
  age += 10
console.log(age)


//Types
//1,any 
// variable declared without any type and without any initialization //eg=>
let result  //which is === let result: any


//2, Arrays
let numbers: number[] = [1, 2, 3]

//3,Tuples
//if we have a fixed number of element must have 2 input
const myCollection: [string, number] = ["Mulualem", 1]

//4, Enum 
//which represent a list of related constants e.g =>

//Don't have to use the bellow
// const small =1 
// const medium = 2
// const large = 3 simply we can define these constants using enum

//PascalCase
enum Size { Small = 1, Medium, Large } //define it as a constant to get  the most out of it while compiling it will help as to hide abstraction of how enum define in js
let mySize: Size = Size.Medium
console.log(mySize) // o/p = 2

//5, Functions
function calculateTac(
  income: number,
  taxYear = 2019,
  unUsedParam = 1  // to tackle this error turn off //"noUnusedParameters": true, 1
): number // to tackle this error turn off //"noImplicitReturns": true, 2.

{

  let x; // to tackle this error turn off //"noUnusedLocals": true, 3.
  if (taxYear < 2022)
    return income * 1.2
  return income * 1.3
}
console.log(calculateTac(10_000)) //or
console.log(calculateTac(10_000, 2023))


//<-------- Type Aliases --------> 
type Employee = {
  readonly id: number, //readonly let us to don't update this property of the object immutable
  name: string,
  retire: (date: Date) => void
}

//6, Objects
let employee: Employee = {
  id: 1,
  name: "John Doe",
  retire: (date: Date) => {
    console.log(date)
  }
}

//<-------- Union Types -------->
//to have more than one types on variable (for combining types)
//but value can be only ONE of the these types
let weights: number | string | boolean

function kgToLbs(weight: number | string): number {

  //Narrowing
  if (typeof weight === 'number')
    return weight * 2.2
  else
    return parseInt(weight) * 2.2

}
kgToLbs(10)
kgToLbs("10")


//<-------- Intersection Types -------->
//to have more than one types on variable
//but value can be all of the type types
let value: number & string //object with two types

//best example. 

type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable // is can be both types

const textBox: UIWidget = {
  drag: () => { },
  resize: () => { }
}

//<-------- Literal Types -------->
//Literal(exact, specific)
//to limit a values we can assign to a variable
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = "cm" | "inch"


//<-------- Nullable Types -------->
function greet(name: string | null | undefined) {

  if (name)
    console.log("Hello " + name.toUpperCase())
  else
    console.log("Hello who are you!!!")
}

greet("Mulualem")
greet(undefined)
greet(undefined)

//<-------- Optional chaining -------->
//there are three area of usage 

type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
//1, Optional PROPERTY access operator
console.log(customer?.birthday?.getFullYear())

 //2, Optional element access operator
 // data?.[0]

 //3, Optional call operator
 let log: any = null;
 log?.("log")