// *** VARIABLES *** //

// 1. Create a variable called 'myName'. VALUE: your name.
var myName = 'Jonathan';
console.log(myName)

// 2. Create a variable called 'myHobbies'. VALUE: array filled with your hobbies.
var myHobbies = ['Piano', 'Bugging Andrew', 'Dominating Andrew in Smash']
console.log(myHobbies)

// 3. Create a variable called 'allAboutMe'. VALUE: an object with height, hairColor, favoriteFood properties. Assign the properties appropriate values.
var allAboutMe = {
  height: '5\' 11"',
  hairColor: 'brown',
  favoriteFood: 'Chocolate'
}
console.log(allAboutMe)

// 4. Create a variable. VALUE: an array with at least 3 values and at least 2 different data types.
var arr = [true, 9, 'anything', null, undefined, [1,2,3], {id: 9}, function() {}]

// 5. Create a variable. VALUE: an object with at least 3 key/value pairs of your choice.
var obj = {
  num: 9,
  str: 'stringy',
  bool: true,
  nully: null,
  und: undefined,
  arr: [1,2,3],
  obj: {id: 2},
  fn: function() {}
}

// *** FUNCTIONS *** //

// Create a function expression that console logs the amount of money you're going to have in 20 years

var money = function() {
  console.log(2000000000);
};
money()

// Create a function declaration that runs console.log('whatever you want to alert') to the console.

function alertSomething() {
  console.log('whatever I want to alert')
}
alertSomething()

// craete a function that taeks in the variable pizza as a parameter and console.log's the value

var pizza = 'pepperoni'

function pizzaMaker(type) {
  console.log(type)
}
pizzaMaker(pizza)

// A funciton that returns a string
function returner() {
  return 'im harry potter'
}
var strReturned = returner()
console.log(strReturned)

// Create a function that returns a car object
function objReturn() {
  return {
    model: 'malibu',
    make: 'chevy',
    year: 2017
  }
  console.log('Im below the return')
}

console.log(objReturn())

// var car1 = {make: 'chevy', model: 'silverado'}
// var car2 = {make: 'tesla', model: 'S'}
// function carReturn(carObj) {
//   return carObj
// }

// carReturn(car2)

// Create a function that returns a function
function fnReturn() {
  return function() {
    console.log('hey im the inner function')
  }
}

var returnedFn = fnReturn()
returnedFn()

// *** SCOPE *** //

var myName = 'Joe';

function sayName() {
  console.log(myName);
}
// sayName()

// What will get logged to the console? 'Joe'? Undefined?

var myCar = 'Ford';

function carMachine() {
  var myCar = 'Chevy';
  return {
    make: myCar 
  }
}
// carMachine();

// What will be the make of the new car that gets created?

var foodItem = 'ice cream';

function favFood( foodItem ) {
  console.log('My favorite food is ' + foodItem + '!');
}
// favFood('pizza')

// What gets logged? Pizza? Ice cream?

