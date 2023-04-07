// <========= Object-Oriented Programming =========>
//others => Procedural, Functional, Event-driven, Aspect-oriented 

//objects are the building block of our application, we will have 100s or 1000s object in our app
//Objects are consists of => 1. DATA(state)->Properties, 2. OPERATIONS(behavior)->Methods


//<------- Creating Classes --------->
//it is a blueprint for creating objects (or factory)
 
export class Account {

    //Properties of balance
    id: number;
    owner:string;
    balance: number;

    constructor(id:number, owner:string, balance:number){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    //Method of the class
    deposit(amount:number): void {
        if(amount <= 0)
            throw new Error("Amount must be greater than 0");
        this.balance += amount;
    }
}
 

//<------- Creating Objects --------->
const account = new Account(1, "Mulualem", 200);
account.deposit(100)

console.log(account)
console.log(account instanceof Account) //boolean operator