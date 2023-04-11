//<-------*What is decorators *--------->
//are attributes that are we applied to our classes and members, we this we can change how they behave.
//we have to enable ->  "experimentalDecorators": true,

//**constructor initializes properties */

//<-------*Class Decorators *--------->
function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the dom");
  };
}

@Component
class ProfileComponent {}

//<-------*Parameterized Decorators *--------->
type ComponentOptions = {
  selector: string;
};

function Components(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    //Parameter for the decorator
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the dom");
    };
  };
}

//<-------*Decorator Composition*--------->
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Components({ selector: "#my-profile" })
@Pipe //here pipe calls first then Components it's because of it act like a Math RULE f(g(x))
class MyProfile {}

//<---*----* ***Method Decorator*** *-----*---->
//PropertyDescriptor => every property in an object has a descriptor object that describes that property
//method decorators have 3 parameters target: any, propertyKey:string, descriptor: PropertyDescriptor

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log("New Implementation");
  const original = <Function>descriptor.value;

  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Person {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person = new Person();
person.say("Hello");

//<-------*Accessor Decorator *--------->
//getter and setter decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;

  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person2 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person2 = new Person2("Mulualem", "Eshetu");

//<-------*Property Decorator *--------->
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters`
          );

        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("1234"); //correct
user.password = "123"; //throws an error

//<-------*Parameter Decorator *--------->
//it's not used often
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters) //[ { methodName: 'move', parameterIndex: 0 } ]

//if  move(@Watch speed: number, @Watch location:string) {}
//console.log(watchedParameters) 
//[
//   { methodName: 'move', parameterIndex: 1 },
//   { methodName: 'move', parameterIndex: 0 }
// ]