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

//<------- Parameter Properties --------->

class Person {
  constructor(
    public readonly id: number,
    public name: string,
    public age: number,
    private _password: string
  ) {}
}
