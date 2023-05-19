//to use ts in js project we have to allow it in ts/config file under JavaScript Support
//"allowJs": true,
//plus we have to change our module setup to //"module": "CommonJS"


//<-------- Type Checking JS Code -------->
// "checkJs": true,  /* Enable error reporting in type-checked JavaScript files. */
//-> this is on of the solution

//@ts-nocheck
export function calculateTax(income) {
  return income * 0.3;
}

//<-------- Describing Types using JSDoc -------->
/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 * @returns {string}
 */
export function personalInfo(firstName, lastName, age) {
  return `I'm ${firstName} ${lastName} and am ${age}`;
}


//<-------- Using Definitely Typed Declaration Files -------->
//npm i lodash  
//use DefinitelyTyped ->GITHUB repo 
//npm i --save-dev(-D ) @types/lodash
//mpl i chalk

import * as _ from "lodash"
const clone = _.clone([1, 2, 3])