/*

class Dog
{
  public string Name { get; set; }

  public void bark() {
    Console.WriteLine($"{Name} bark");
  }

  public void eat() {
    Console.WriteLine("Mmmmmmm");
  }
}
*/

function DogFromPrototype() {
  // An object that describes the things these objects can do
  const prototype = {
    bark: function () {
      console.log('bark bark!')
    },

    eat: function () {
      console.log('mmmmmm')
    },
  }

  return prototype
}

class Dog {
  name = ''

  constructor(newDogName) {
    this.name = newDogName
  }

  greet = () => {
    console.log(`Hello I am ${this.name}`)
  }

  bark() {
    console.log(`${this.name} barks from a class`)
  }

  eat() {
    console.log('mmmmmmmmm')
  }
}

class LoudDog extends Dog {
  constructor(newDogName) {
    super(newDogName.toUpperCase())
  }

  bark() {
    console.log(`${this.name.toUpperCase()} SAYS BARK!!!!!`)
  }

  yell() {
    console.log('I am a loud dog, so I yell!')
  }
}

function main() {
  const riley = new Dog('Riley')
  const fluffy = new Dog('Fluffy')
  const bruno = new Dog('Bruno')

  riley.greet()

  const jack = new LoudDog('Jack')
  console.log(jack.name)
  jack.bark()
  jack.yell()

  riley.bark()
  console.log(riley.name)

  fluffy.bark()
  console.log(fluffy.name)

  bruno.bark()
  console.log(bruno.name)

  console.log(riley)
  console.log(fluffy)
  console.log(bruno)
}

document.addEventListener('DOMContentLoaded', main)
