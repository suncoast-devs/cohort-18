/*

class Dog
{
  public void bark() {
    Console.WriteLine("bark");
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
  bark() {
    console.log('Bark from a class')
  }

  eat() {
    console.log('mmmmmmmmm')
  }
}

function main() {
  const riley = new Dog()

  riley.bark()
}

document.addEventListener('DOMContentLoaded', main)
