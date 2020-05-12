using System;

namespace InteractingWithTheConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("What is your name? ");
            // Reading a string INTO a variable
            var name = Console.ReadLine();

            var greeting = $"It is a pleasure to meet you, {name}. I hope you, {name}, enjoy my program.";
            // Writing a string into the console
            Console.WriteLine(greeting);

            Console.Write("What is your favorite number? ");
            var favoriteNumberString = Console.ReadLine();

            // Convert string into integer
            int favoriteNumber = int.Parse(favoriteNumberString);

            var doubleYourNumber = $"Your favorite number times two is {favoriteNumber * 2}";
            Console.WriteLine(doubleYourNumber);
        }
    }
}
