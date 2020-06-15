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

const userName = window.prompt('What is your name?')
console.log(`Nice to meet you ${userName}`)
