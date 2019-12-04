// Closure:
// 1. Function within a function
// 2. The inner function is returned from the outer function

function outer() {
  // Outer has one local variable
  let num = 1
  function inner() {
    // Inner can access outer's local variables because scope
    // Inner modifies num and console.log's the new value
    num++
    console.log(`the current value of num is ${num}`)
  }
  // Outer returns inner
  // NOTE: inner was NOT invoked.
  return inner
}

// outer is invoked and inner is returned
// what is the value of closure1? The function "inner".
const closure1 = outer()
const closure2 = outer()
// console.log(closure1)

// since closure1 is a function, we can invoke it.
// closure1()

// What happens if we invoke closure1 multiple times?
// closure1()
// closure1()
// closure1()
// closure1()
// closure1()

// closure2()
// closure2()
// closure1()
// the closure retains a reference to any local variables in the parent function's scope.

// *** MODULE PATTERN *** //
// public and private methods and variables
// shields parts of our code from the global scope

function modulePattern() {
  // Any variables and functions here are private
  // and are only accessed through the public functions
  // in the returned object

  let privateVariable = 'I am private'

  let privateFunction = function () {
    console.log(privateVariable)
  }

  return {
    // everything I return will be public
    changeVar: function (str) {
      privateVariable = str
    },
    readVar: function () {
      privateFunction()
    }
  }
}

// module1 is an object with public methods
const module1 = modulePattern()
// module1.readVar()
module1.changeVar('changing a private var through a public method')
// module1.readVar()


// *** PRACTICE! *** //

// Write an outer function that takes in a start number
// It will have an inner function that takes in a number
// to add to the start number parameter in the parent function

function outerTest(startNum) {
  function innerTest(num) {
    // return startNum = startNum + num
    return startNum += num
  }
  return innerTest
}

const innerFn = outerTest(9)
innerFn(4)


// Order tracker. Tracks ingredients in a sandwich order

function orderCreator() {
  let listOfIng = []
  return function (ing) {
    listOfIng.push(ing)
    console.log('List: ', listOfIng)
  }
}

let andySandy = orderCreator()
// andySandy('Money')
// andySandy('Spicy Mayo')
// andySandy('Salami')
// andySandy('Salt & Pepper')

let joshOrder = orderCreator()
// joshOrder('Lettuce')
// joshOrder('Tomato')
// joshOrder('Olives')
// joshOrder('Pastrami')

// andySandy('Josh wont move to Arkansas')

// Create a calculator using closures and the module pattern

function calculatorCreator() {
  let startVal = 0
  return {
    add: function(val) {
      startVal += val
      return startVal
    },
    sub: function(val) {
      startVal -= val
      return startVal
    },
    mult: function(val) {
      startVal *= val
      return startVal
    },
    div: function(val) {
      startVal /= val
      return startVal
    },
    clear: function() {
      startVal = 0
      return startVal
    }
  }
}

let calc1 = calculatorCreator()
// calc1.add(200)
// calc1.add(33)
// calc1.sub(5)
// calc1.div(2)
// calc1.mult(4)

let calc2 = calculatorCreator()


// Create a bank account example. It will have a private variable for the balance, and return public methods to add and remove funds.

function bankAcct(pin) {
  let balance = 0
  return {
    deposit: function(amt) {
      return balance += amt
    },
    withdraw: function(amt, pinCheck) {
      if (pinCheck === pin && amt <= balance) {
        balance -= amt
        return {
          balance: balance,
          withdraw: amt
        }
      } else if(pinCheck === pin) {
        return 'You dont have enough money'
      } else {
        return 'Wrong pin'
      }
    }
  }
}

const kalaniAcct = bankAcct(8756)
kalaniAcct.deposit(300)
kalaniAcct.withdraw(150, 8756)
kalaniAcct.deposit(1000000)
kalaniAcct.withdraw(2000000, 8756)
kalaniAcct.withdraw(2, 14)


// *** CLASSES! *** //

// but first, a review of constructor functions:
// A constructor is a function that builds objects
function Car(make, model, year) {
  // "this" is the object we're creating:
  this.make = make
  this.model = model
  this.year = year
}
Car.prototype.honk = function() {
  console.log(`${this.make} ${this.model} says honk honk!`)
}
const hondaPilot = new Car('Honda', 'Pilot', 2019)
// hondaPilot.honk()

// Just like constructor functions, classes are blueprints for creating Objects.
// Classes are "syntax sugar" for constructor functions and prototype methods

class Robot {
  // constructor is a key word - it creates the object itself
  constructor(name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
  }
  // Methods go outside the constructor
  // Methods will be placed on the prototype, NOT the actual object.
  beep() {
    return this.name + ' says beep boop'
  }
}

// Just like with a constructor function, we use the "new" keyword to create a new instance of our class. The object created with the "new" keyword IS the value of "this" for context.

const robot1 = new Robot('R2D2', 'white', 'beeping')
const robot2 = new Robot('C3P0', 'gold', 'complaining')
robot2.beep()

// Classes can "extend" from other classes, meaning they inherit their prototype methods and properties.

class Terminator extends Robot {
  constructor(name, color, superpower, weapon) {
    // super is a method that invokes the constructor from the class we're extending from. In this case, Robot:
    super(name, color, superpower)
    this.weapon = weapon
    this.numberOfKills = 0
    this.peopleKilled = []
  }

  introduceSelf() {
    return super.beep() + ". I'll be back."
  }  

  kill(name) {
    this.numberOfKills++
    this.peopleKilled.push(name)
    return `${this.name} killed ${name} with his ${this.weapon}. Kill tally: ${this.numberOfKills}`
  }
}

const termy = new Terminator('T900', 'chrome', 'Saving Sarah Conner', 'smile')
termy.kill('Jonahtan')
termy.introduceSelf()
termy.kill('Andrew')

// PERSON AND ATHLETE

class Person {
  constructor(name, age, favoriteColor) {
    this.name = name
    this.age = age
    this.favoriteColor = favoriteColor
  }
  sayHi() {
    return `Hello! My name is ${this.name}`
  }
}

const person1 = new Person('Josh', 28, 'blue')
person1.sayHi()

class Athlete extends Person {
  constructor(name, age, favoriteColor, sport) {
    super(name, age, favoriteColor)
    this.sport = sport
    this.injuries = []
  }
  introduceSport() {
    return super.sayHi() + ', and I play ' + this.sport
  }
  addInjury(inj) {
    this.injuries.push(inj)
    return this
  }
}

const athlete1 = new Athlete('Josh', 28, 'blue', 'basketball')
athlete1.introduceSport()
athlete1.addInjury('tennis elbow')
