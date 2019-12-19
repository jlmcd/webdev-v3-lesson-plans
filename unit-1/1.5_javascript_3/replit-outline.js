// *** ARRAY METHODS *** //

// MAP
const dogs = ['husky', 'german shepherd', 'goldendoodle', 'lab']
const newDogs = dogs.map(function(el, i, arr) {
  return `${el} is a good boy`
  // return 'the dog ' + el + ' is a good boy'
})
// console.log(dogs)
// console.log(newDogs)

// What does map take in? (Custom part - the part that changes)
// A FUNCTION! (NOT el, i, arr)
// The function HAS to return whatever we want to put in a new array.

// What does map do? (Built-in part. The part that doesn't change)
// loops over the array
// allows us to access each element in the array 
// allows us to change each element of the array (BUT it does not change the original array)

// What does map return?
// Returns an array that is equal in length to the original array
// With updated values


// Some students find it helpful to visualize what .map is doing
// under the hood, so sometimes I show them this basic outline
let mapCopy = function(callback) {
  for (let i = 0; i < dogs.length; i++) {
    callback(dogs[i], i, dogs)
  }
}


// FILTER
const turtles = ['Tsea', 'TSnapping', 'Ninja']
// what does filter take in? (custom part, does change)
const turtlesWithS = turtles.filter(function(el, i, arr) {
  if (el[0] === 's' || el[0] === 'S') {
    return true
  } else {
    return false
  }
})
// console.log(turtles)
// console.log(turtlesWithS)

// What does filter do? (built-in part that does not change)
// loop over the array
// it's going to test each element of the array
// if the element passes the test, it will be placed in the new array

// What does filter return?
// An array.
// The array will be full of ONLY the element that pass the test above
// If none pass, the array will be empty

const birds = [
  {breed: 'pigeon',
  name: 'pidgey'},
  {breed: 'bald eagle',
  name: 'iglet'},
  {name: 'unknown'}
]

const filteredBirds = birds.filter(function(el, i, arr) {
  return el.breed
})
// console.log(filteredBirds)

const birdsWithB = birds.filter(function(el, i, arr) {
  if (el.breed && el.breed[0] === 'b') {
    return true
  }
})
// console.log(birdsWithB)



// REDUCE
const nums = [1,2,3,4,5,6]
let product = nums.reduce(function(acc, el, i, arr) {
  return acc * el
})
// console.log(nums)
// console.log(product)

let orders = [
  {
    name: 'shoes',
    price: 50
  },
  {
    name: 'socks',
    price: 3
  },
  {
    name: 'pants',
    price: 40
  }
]

const total = orders.reduce(function(acc, el, i, arr) {
  acc.push(el.name)
  return acc
}, [])
// console.log(total)

// What does reduce take in? (custom part)
  // a function
    //  that function takes in FOUR parameters (acc, el, i, arr)
    //  this callback function should return the new accumulator
  // Reduce also takes in an OPTIONAL second parameter:
  // The initial accumulator value

// What does reduce do? (built-in part)
// loops over the array
// it's going to combine all of the element of that array into one piece of data

// What does reduce return?
// the combined piece of data



// *** OBJECTS *** //

let dragon = {
  color: 'green',
  scales: 'shiny',
  name: 'Drogon',
  fur: 'soft'
}

// DELETE

// How do we remove a property from an object?

// dragon.fur = null
// console.log(dragon)
// This doesn't completely remove the key/value pair.

delete dragon.fur
// console.log(dragon)
// the delete keyword comppletely removes the key/value pair.

// can I use the delete keyword in an array?
let fish = ['clown', 'gold', 'bass', 'cat']
// No, we need to use splice instead.
fish.splice(2, 1, null)
// console.log(fish)
// ONLY USE DELETE FOR OBJECTS! :)


// FOR IN LOOPS

// How do we access a property in an object using a variable????????
const instructor = {
  name: 'Jonathan',
  hair: 'there',
  hobby: 'piano',
  work: 'DevMountain'
}
// let variable = 'hobby'
// instructor[variable]

for (let key in instructor) {
  // console.log(key)
  // console.log(instructor[key])
}

// OBJECT ASSIGN & SPREAD
let cat1 = {
  name: 'Lucifer'
}
let cat4 = {
  fur: 'soft'
}
// let num1 = 9
// let num2 = num1
// num2++
// console.log(num1, num2)
// How do we copy objects in Javascript?
let cat2 = cat1
cat1.color = 'black'

let cat3 = Object.assign({}, cat1, cat4, instructor, {color: 'pink'})
cat3.color = 'pink'
cat4.isCool = true

// console.log(cat1)
// console.log(cat4)
// console.log(cat3)

// SPREAD OPERATOR
let cat5 = {...cat1, ...cat4, name2: 'Hello Kitty'}
// console.log(cat5)

let arr1 = ['jonathan', 'andrew']

arr2 = [...arr1]
// console.log(arr2)



// DESTRUCTURING

// Sometimes we need to store data from an object in a variable. How would we do this?

const campusDirectory = {
  wlh10: 'Jonathan',
  wlh9: 'Tayte',
  wlh8: 'Jonathan',
  wlh7: 'Tayte',
  mentors: {
    wlh10: ['Andrew', 'Josh'],
    wlh8: ['Sam', 'Kevin']
  }
}
const wlh8Mentors = campusDirectory.mentors.wlh8
const wlh10Mentors = campusDirectory.mentors.wlh10

// ES6 has a faster way to do this ^^^^. It's called destructuring.
const {wlh10, wlh8} = campusDirectory.mentors
// destructuring makes a 1:1 copy of the data if it is a primitive data type,
// and a _reference_ copy of the data if it is a complex data type.

console.log(`${wlh10[0]} is a cool mentor. So is ${wlh10[1]}.`)



// *** ARROW FUNCTIONS *** //

// What if we could write functions with less typing?
// NO PARAMS
function first() {
  return 'this function has no params'
}
const firstArrow = () => {
  return 'this function has no params'
}
const firstArrowEvenShorter = () => 'this function has no params'
firstArrowEvenShorter()

// ONE PARAM
function second(param) {
  return param
}
const secondArrow = (param) => {
  return param
}
const secondArrowALittleShorter = param => param

// MULTIPLE PARAMS
function third(param1, param2) {
  return param1 + param2
}

const thirdArrow = (param1, param2) => {
  return param1 + param2
}

const thirdArrowALittleShorter = (param1, param2) => param1 + param2



// *** NESTING *** //

// Nested Looping
let christmasList = ['$1000000', '$1000000', '$1000000', 'house made of chocolate', '$1000000', 'pony', 'toy truck', 'pony', 'house made of chocolate']

// we are going to remove any duplicates from our array using nested loops
for (let i = christmasList.length - 1; i >= 0; i--) {
  for (let j = christmasList.length; j >= 0; j--) {
    if (christmasList[i] === christmasList[j] && i !== j) {
      christmasList.splice(i, 1)
    }
  }
}
// WRONG WAY!
// for (let i = 0; i < christmasList.length; i++) {
//   for (let j = 0; j < christmasList.length; j++) {
//     if (christmasList[i] === christmasList[j] && i !== j) {
//       christmasList.splice(i, 1)
//     }
//   }
// }
// console.log(christmasList)

// If we remove items while we loop forward, elements will be reassigned indexes and consequently
// they will be skipped over in the looping process. This is why we need to loop _backwards_.


const teams = {
  voldemort: {
    leader: 'Voldemort',
    rightHand: 'Bellatrix',
    leftHand: 'Lucius'
  },
  gryffindor: {
    leader: 'Harry',
    rightHand: 'Ron',
  },
  hufflepuff: {
    leader: 'Andrew',
    rightHand: 'Tonks'
  }
}

for (let key in teams) {
  for (let key2 in teams[key]) {
    console.log(key, key2, teams[key][key2])
  }
}