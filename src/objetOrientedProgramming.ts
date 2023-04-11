// <========= Object-Oriented Programming =========>
//others => Procedural, Functional, Event-driven, Aspect-oriented

//objects are the building block of our application, we will have 100s or 1000s object in our app
//Objects are consists of => 1. DATA(state)->Properties, 2. OPERATIONS(behavior)->Methods

//<------- Creating Classes --------->
//it is a blueprint for creating objects (or factory)

export class Account {
  //Properties of balance

  //<------- Read-Only Property --------->
  readonly id: number;
  //<------- Access Control(Modifiers) Keywords --------->
  //public - private - protected, by  default every property is public
  owner: string;
  private _balance: number;
  //<------- Optional Property ---------
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  //Method of the class
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be greater than 0");
    this._balance += amount;
    this.calculateInterest(100, 1);
  }

  //To access that private properties outside of this class we can define method that return balance
  getBalance(): number {
    return this._balance;
  }

  //to update the above we can use, use getter
  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Amount must be greater than 0");
    this._balance = value;
  }

  //private method also work for methods
  private calculateInterest(balance: number, rate: number): number {
    return (balance * rate) / 100;
  }
}

//<------- Creating Objects --------->
const account = new Account(1, "Mulualem", 200);
account.deposit(100);

console.log(account);
console.log(account instanceof Account); //boolean operator

class Person {
  constructor(
    //<------- Parameter Properties --------->
    public readonly id: number,
    public name: string,
    public age: number,
    private _password: string
  ) { }

  //<------- Getters and Setters --------->
  //getter a method inside of a class to get a value of a properties
  get password() {
    return this._password;
  }

  set password(password: string) {
    const hashKey = "734rygf7vs5tgr3f7d6w534trgfw7y65t3grf";
    password.concat(hashKey);
  }
}

const capitan = new Person(1, "Mulualem", 20, "123456");
console.log(capitan.name);

//<------- Indexing Signatures --------->
//it help us to add or change properties of objects dynamically
class SeatAssignment {
  //Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats["A1"] = "Mulualem";
seats.A2 = "Eshetu";

//<------- Static Members --------->
//It is a property that belongs to a class not an object,
//once we create a property with static it became part of a class it have only a single instance of it on memory

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  end() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

//<------- Inheritance --------->
//we have Parent/Base/Super class &
// Child/Derived/Sub

class Person1 {
  constructor(public firstName: string, public lastName: string) { }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person1 {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

let student = new Student(1, "Mulualem", "Eshetu");
student.walk();

//<------- Method Overriding --------->
class Teacher extends Person1 {
  // "noImplicitOverride": true,
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("Mosh", "Hamedani");
console.log(teacher.fullName);

//<------- Polymorphism ** --------->
//Poly ->Many, Morph->Form => Polymorphism => Many Form

//It follows Open closed principal which means
//Classes should be OPEN for EXTENSION and CLOSED for MODIFICATION

class Principal extends Person1 {
  override get fullName() {
    return "Principal" + super.fullName;
  }
}

//Polymorphism
printNames([
  new Student(1, "Mulualem", "Eshetu"),
  new Principal("Mosh", "Hamedani"),
  new Teacher("Mary", "Smith"),
]);

function printNames(people: Person1[]) {
  for (let person of people) console.log(person.fullName);
}

//<------- Private vs Protected Members --------->
//protected members are inherited but privets are not

//<------- Abstract Classes and Methods --------->

abstract class Shape {
  constructor(public color: string) { }
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

//we don't have to do like the below cause SHAPE is not a real object to stop us from doing this we have to use abstract
// let shape = new Shape("red")
// shape.render();

const circle = new Circle(4, "Green");
console.log(circle);

//<-------* Interfaces *--------->
//to define the shape of objects
//they can't have method implementations, we only have method declarations

// abstract class Calendar {

//   constructor(public name: string) { }

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

//Instead of using the above class we can use an interfaces
interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface ICloudCalendar extends ICalendar {
  sync(): void;
}

class GoogleCalendar implements ICloudCalendar {
  constructor(public name: string) { }

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }

  sync(): void {
    throw new Error("Method not implemented.");
  }
}

const googleCalendar = new GoogleCalendar("New calendar");

console.log(googleCalendar ) 