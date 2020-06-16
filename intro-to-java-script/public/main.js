/*
const myName = 'Jason'
const favoriteColor = 'blue'
const favoriteNumber = 42

// for (var index = 0; index < 20; index++) {
for (let index = 0; index < 20; index = index + 1) {
  // Console.WriteLine($"This index is {index}");
  console.log(`Hi ${myName}, the index is ${index}`)
}

switch (myName) {
  case 'Gavin':
    console.log('You are Gavin, the instructor')
    break

  case 'Jason':
    console.log('You are Jason, the CEO')
    break
}

console.log('My program is finished')

// Function keyword
// |
// |        name of method
// |        |
// |        |      list of arguments
// |        |      |
// |        |      |
// v        v      v
function square(number) {
  return number * number
}

// assign a new variable from the *result* of calling square
const squareOfFive = square(5)
console.log(squareOfFive)

// This is the same as above.
const squareExpression = function (number) {
  return number * number
}

const otherSquareOfFive = squareExpression(5)
console.log(otherSquareOfFive)

// Expression style definition of a *variable*
// that contains a method that accepts an argument
// callled *number* and *returns* twice that number
const double = function (number) {
  return number * 2
}

const triple = function (number) {
  return number * 3
}

const half = function (number) {
  return number / 2
}

const greet = function (number) {
  return `Hi there, isn't ${number} a great number`
}

//
// The first argument to this method should be an array. Please pass me one
// The second argument to this method is a function! Please pass me one
function printIt(array, functionToRunForEachValue) {
  // go through the array one element at a time
  for (let index = 0; index < array.length; index++) {
    // Get the value from the array at index 0
    // First time through index =0 and value = 42
    // Second time through index = 1 and value = 100
    // Third time through index = 2 and value = 1
    const value = array[index]

    // What is the value of functionToRunForEachValue? => the function double
    // The first time through this is the same as   result = double(42) => 84
    // The second time through this is the same as  result = double(100) => 200
    const result = functionToRunForEachValue(value)

    // The first time through this logs  console.log(84)
    // The second time through this logs  console.log(200)
    console.log(result)
  }
}

// Make a new variable called numbers, and assign it an array of numbers
const numbers = [42, 100, 1, 21, 15, 32]
printIt(numbers, greet)

// var result =  arrayOfNumbers.Select(number => number * 2)
// var result =  arrayOfNumbers.Select(number => number * number)
// var result =  arrayOfNumbers.Select(number => number / number)

// const userName = window.prompt('What is your name?')
// console.log(`Nice to meet you ${userName}`)

// C#:  var names = new string[] {'Gavin', 'Jason', 'Katherine', 'Paul', 'Mary', 'Sam', 'Lucy'}
const names = ['Gavin', 'Jason', 'Katherine', 'Paul', 'Mary', 'Sam', 'Lucy']
const lengthOfNames = names.length
console.log(lengthOfNames)

const firstName = names[0]
console.log(firstName)
const secondName = names[1]
console.log(secondName)

// for loop
// Initializer
// Condition
// What-do-after-each-loop
for (let index = 0; index < names.length; index++) {
  // Get the item from the array at index equal
  // to whatever `index` variable is right now
  const valueAtIndex = names[index]
  console.log(valueAtIndex)
}

// C#: var totalLengthOfAllNames = 0;
let totalLengthOfAllNames = 0
// C#: for (var index = 0; index < names.length; index++) {
for (let index = 0; index < names.length; index++) {
  // Get the item from the array at index equal
  // to whatever `index` variable is right now
  // C#: var valueAtIndex = names[index]
  const valueAtIndex = names[index]

  // Get the length of this name
  // C#: var lengthOfName = valueAtIndex.length
  const lengthOfName = valueAtIndex.length

  // Add to the total length
  totalLengthOfAllNames = totalLengthOfAllNames + lengthOfName
}
console.log(totalLengthOfAllNames)

const numbers = [
  1,
  2,
  3,
  3,
  4,
  5,
  6,
  64,
  345,
  6435,
  3456,
  3456,
  3456,
  3456,
  3456,
  3456,
  3456,
  3456,
  345,
  6345,
  634,
  56,
  3456,
  346,
  3456,
  3456,
  4,
]
*/

// traditional function style
function double(number) {
  return number * 2
}

// function as variable declaration style
const doubleAsVariable = function (number) {
  return number * 2
}

// Arrow function style
// - no function keyword
// - after the arguments but before the body, add an arrow =>
const doubleAsArrowFunction = (number) => {
  return number * 2
}

// IF the arrow function only has ONE statement in it.
// and if that statement is a RETURN statement, we can
// shorten the code
const doubleAsShorterArrowFunction = (number) => number * 2

// Parens are required!
const zeroArgumentArrowFunction = () => console.log('WOW')

// Parens are required!
const twoArgumentArrowFunction = (number1, number2) => number1 + number2

// IF the arrow function has only ONE statement in it
// and we don't care about the return, we can shorten it
const logTheValue = (value) => console.log(value)

console.log(double(4)) // 8
console.log(doubleAsVariable(5)) // 10
console.log(doubleAsArrowFunction(6)) // 12
console.log(doubleAsShorterArrowFunction(7)) // 14
logTheValue(42)
