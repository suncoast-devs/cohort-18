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
  name = 'Not Named'

  bark() {
    console.log(`${this.name} barks from a class`)
  }

  eat() {
    console.log('mmmmmmmmm')
  }
}

function main() {
  const riley = new Dog()

  riley.bark()
  console.log(riley.name)
  riley.name = 'Riley'
  riley.bark()
}

document.addEventListener('DOMContentLoaded', main)
