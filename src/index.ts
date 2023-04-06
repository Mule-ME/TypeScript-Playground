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

//Functions
function calculateTac(
  income: number,
  taxYear = 2019,
  unUsedParam =1  // to tackle this error turn on //"noUnusedParameters": true, 1
): number // to tackle this error turn on //"noImplicitReturns": true, 2.

{

  let x; // to tackle this error turn on //"noUnusedLocals": true, 3.
  if (taxYear < 2022)
    return income * 1.2
  // return income * 1.3
}
console.log(calculateTac(10_000)) //or
console.log(calculateTac(10_000, 2023))

