//<-------* Exporting & Importing *--------->
import { Circle, Square } from "./shapes";

const myCircle = new Circle(1);
const mySquare = new Square(4, 4);

console.log(myCircle, mySquare);

//<-------* Module Formats *--------->
// "module": "commonjs",                                /* Specify what module code is generated. */

//<-------* Default Exports *--------->
import DataStore, { Format } from "./storage";

const HDD = new DataStore();
console.log(HDD);


//<----------* Re-exporting  *--------->
// combine the exports of different module
// "moduleResolution": "node",   /* Specify how TypeScript looks up a file from a given module specifier. */

export {Circle, Square}
