//
//

const numbers = [100, 42, 18, 99]
const oneNumber = numbers[2]
console.log(oneNumber)

// A raw string of JSON
const rawJSON = `
  {
    "myName": "Gavin",
    "favoriteColor": "blue",
    "isTeacher": true,
    "favoriteNumber": 42
  }
  `

// Turn that into a real JavaScript object
const parsedJSON = JSON.parse(rawJSON)

// Log that object
console.log(parsedJSON)

const teacher = {
  // property: value,
  // property: value,
  // property: value,

  // property is 'name'
  // value is 'Gavin'
  myName: 'Gavin',

  // property is 'favoriteColor'
  // value is 'blue'
  favoriteColor: 'blue',

  isTeacher: true,

  favoriteNumber: 42,
  currentSnackOfChoice: 'chips and salsa',
  'favorite movie': 'Star Wars',
  'favorite-band': 'They Might be Giants',

  greeting: function () {
    return `Well, hello there ${this.myName}!`
  },
}
const otherPerson = {
  myName: 'Jason',
  favoriteNumber: 100,
  currentSnackOfChoice: 'Unknown',
}

console.log(teacher.myName)
console.log(teacher.favoriteNumber)
console.log(teacher.currentSnackOfChoice)
console.log(teacher['favorite movie'])
console.log(teacher['favorite-band'])
console.log(teacher.greeting())
//
//

function logDetails(person) {
  // This pattern is so common, JavaScript gives us a shortcut
  //
  // const property = object.property
  // const otherProperty = object.otherProperty
  //
  // This is equivalent to the above
  // -- this is called *destructuring assignment*
  // const { property, otherProperty } = object
  //
  // const myName = person.myName
  // const favoriteNumber = person.favoriteNumber
  // const currentSnackOfChoice = person.currentSnackOfChoice

  // Destructure person object into three local variables.
  // the local variables have the names as the properties we access
  const { myName, favoriteNumber, currentSnackOfChoice } = person

  console.log(`${myName} ${favoriteNumber} ${currentSnackOfChoice}`)
}

logDetails(teacher)
