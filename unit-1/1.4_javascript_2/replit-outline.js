// *** ARRAYS *** //

// How can we store a list?
// With variables or............. an array
let first = 'buy groceries'
let second = 'walk the dog'
let third = 'wash the laundry'

// What is an array? What syntax does it use?
// Just a list.
let todoList = ['buy groceries', 'walk the dog', 'wash laundry']

// What can we keep in an array?
let randomList = ['string', 1, {thing: '1'}, true, NaN, undefined, null, function() {}, [1,2,3]]

// How can we access the items in the array?
// console.log(randomList[0]) 
// the first item in the array has an index number of 0.

// How can we access the last item in the array?
// console.log(randomList[randomList.length - 1])


//  *** ARRAY METHODS *** //
let pianos = ['Steinway', 'Bosendorfer']
// PUSH
// Action: take the argument and adds to the end of the array
// Returns: the new length of the array
let pushReturn = pianos.push('Fazioli', 'Young Chang', 'Kawai')
// console.log(pianos)
// console.log(pushReturn)

// POP
// Action: removes the last element of the array
// Returns: the element that we removed from the array
let popReturn = pianos.pop()
// console.log(pianos)
// console.log(popReturn)

let sports = ['Basketball', 'Soccer']

// UNSHIFT
// Action: Adds the argument(s) to the beginning of the array
// Returns: The new length of the array
let unshiftReturn = sports.unshift('Tennis', 'Golf')
// console.log(sports)
// console.log(unshiftReturn)

// SHIFT
// Action: Removes the first element of the array
// Returns: The element we removed from the array
let shiftReturn = sports.shift()
// console.log(sports)
// console.log(shiftReturn)

let dogs = [
  'Sheepadoodle', 
  'German Shepherd', 
  'Great Dane', 
  'Mastiff', 
  'Jack Russel', 
  'Yorkie', 
  'Corgie', 
  'Beagle', 
  'Pit Bull', 
  'Pomsky']

// SLICE
// Action: Nothing to the original array
// Returns: A copy of the array
// 1st Arg (OPTIONAL): The index we want to start our copy at
// 2nd Arg (OPTIONAL): The index we want to stop our copy at (but it doesn't include the element at this index)
let sliceReturn = dogs.slice(4, 6)
// console.log(dogs)
// console.log(sliceReturn)

// SPLICE
// Action: (OPTIONAL) remove stuff from the array, and (OPTIONAL) add stuff to the array
// Returns: An array of the things we removed
// 1st Arg (REQUIRED): the index to start removing things from
// 2nd Arg (OPTIONAL): the number of elements to remove
// 3rd Arg (OPTIONAL): new data to be added to the array
let spliceReturn = dogs.splice(4, 0, 'Lab')
// console.log(dogs)
// console.log(spliceReturn)


// *** FOR LOOPS *** //
// What is a for loop? What is the syntax?

// for (let i = 0; i <= 10; i++) {
//   // any action you want goes here
//   console.log(i)
// }

// How many ways can I loop?
// As many as you think of 

// for (let i = -218; i >= -500; i -= 5) {
//   console.log(i)
// }

// Can we go backwards?
// for (let i = 100; i >= 0; i--) {
//   console.log(i)
// }

// How can we use a for loop with an array?
let students = ['Danyal', 'Benjamin', 'Julio', 'Jordan']
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

// Can we loop backward through an array?
// for (let i = students.length - 1; i >= 0; i--) {
//   console.log(students[i])
// }


// *** OBJECTS *** //

// How can we store related pieces of data?
let name = 'Jonathan'
let hair = 'brown'
let fingers = 10
let email = 'jon@than.com'
let password = '$ecret'

// would an array work?
let userArr = ['Joanthan', 'brown', 10, 'jon@than.com', '$ecret']

// What is an object? What's the syntax:

let userObj = {
  name: 'Jonathan',
  hair: 'brown',
  fingers: 10,
  email: 'jon@than.com',
  password: '$ecret'
}

// What can we keep in an object?

let randomObj = {
  str: 'string',
  num: 9,
  fn: function() {},
  obj: {},
  nully: null,
  bool: true,
  und: undefined,
  arr: [1,2,3],
  notANumber: NaN
}

// How can we access the items of an object?
// DOT NOTATION:
// console.log(userObj.fingers)
// BRACKET NOTATION:
// console.log(userObj['fingers'])
// the advantage of bracket notation is that it allows us to use a variable for a property name
let key = 'fingers'
// console.log(userObj[key])

// what if i want to get all of the keys out of an object?

// The FOR...IN loop
// for (let key in randomObj) {
//   // console.log(key)
//   console.log(randomObj[key])
// }

// How can we add more data to an object?
let andrew = {
  name: 'Andrew',
  instrument: 'Drummy Drum Drums'
}
andrew.isBeautiful = true
andrew['likesPokemon'] = 'sure'
console.log(andrew)


// *** METHODS *** //

// How do we write them?
let methodsObj = {
  fn1: function() {
    console.log('waddap')
  },
  fn2: function(name) {
    console.log(`waddap, ${name}`)
  }
}

// How do we invoke them?
methodsObj.fn2('Josh')


// *** NESTED DATA *** //
let objArr = [
  {
    name: 'Danyal',
    greeting: function() {
      console.log('Hello, Danyal')
    },
    friends: ['Jordan', 'Cooper']
  },
  {
    name: 'Kalani',
    greeting: function() {
      console.log('Hello, Kalani')
    },
    friends: ['Brooke', 'Cooper']
  },
  {
    name: 'Benjamin',
    greeting: function() {
      console.log('Hello, Benjamin')
    },
    friends: ['Julio', 'Danyal']
  }
]
console.log(objArr[1].friends[0])
console.log(objArr[1].name)


// *** CALLBACKS *** //

// What data types can we pass into a function?
// Anything - EVEN a function.

function funky(cb) {
  cb()
}

funky(function() {
  console.log('Im a callback')
})

// What is a callback?
// A function passed in as an argument to another function

// DRY CODE: (Don't repeat yourself)

// BAD WAY OF DOING THINGS
let addTotal = 0
function addFn(num) {
  addTotal = addTotal + num
  return addTotal
}
addFn(8)
addFn(19)

let subtractTotal = 10
function subtractFn(num) {
  subtractTotal = subtractTotal - num
  return subtractTotal
}

subtractFn(3)
subtractFn(2)

// BETTER WAY: (The callback pattern)
let total = 0
function calculator(num, func) {
  total = func(total, num)
  return total
}
function add(currentTotal, newNum) {
  return currentTotal + newNum
}
function subtract(currentTotal, newNum) {
  return currentTotal - newNum
}

calculator(100, add)
calculator(50, subtract)

// calculator is a "higher order function"
// add & subtract are "callback functions"



// *** TERNARY *** //

// let's review if/else 
let age = 14

// if (age > 20) {
//   console.log('you can drink')
// } else {
//   console.log('wait a little')
// }

// What if you could write the same thing, but with less typing?
// YOU CAN! With a Ternary :)

// CONDITION TO CHECK ? The return value if true : the return value if false
age > 20 ? console.log('you can drink') : console.log('wait a little')

if (age < 16) {
  console.log('Bikes are great')
} else if (age <= 18) {
  console.log('You cant vote')
} else {
  console.log('Adulting is great')
}

age < 16 ? (
  console.log('Bikes are great')
  ) 
  : 
  age <= 18 ? (
    console.log('You cant vote')
    ) 
    : 
    console.log('Adulting is great')