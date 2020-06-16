const colors = ['red', 'green', 'blue']

// OLD SCHOOL
// for (let index = 0; index < colors.length; index++) {
//   const color = colors[index]
//   console.log(`The color at position ${index} is ${color}`)
// }

// the first argument of the function we give to forEach
// will the element of the array during the loop
//
// the second argument of the function we give to forEach
// will be the INDEX of the element during the loop
const logTheColor = function (color, index) {
  console.log(`The color at position ${index} is ${color}`)
}
// Does looping for us
// and we just need to give it a function to call
// for each element in the loop!
colors.forEach(logTheColor)

// Anonymous function
// function without any name or assigned to a named variable
colors.forEach(function (color, index) {
  console.log(`The color at position ${index} is ${color}`)
})

// Arrow function version
colors.forEach((color, index) => {
  console.log(`The color at position ${index} is ${color}`)
})

// Shortened arrow function version
colors.forEach((color, index) =>
  console.log(`The color at position ${index} is ${color}`)
)

const lengths = []
colors.forEach(function (color) {
  const lengthOfColor = color.length

  lengths.push(lengthOfColor)
})

const lengthsFromMap = colors.map((color) => color.length)
console.log(lengthsFromMap)

const longColors = colors.filter((color) => color.length > 3)
console.log(longColors)

const numbers = [100, 42, 13]
const total = numbers.reduce((total, number) => total + number, 0)
console.log(total)
