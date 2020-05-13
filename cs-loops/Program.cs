using System;
using System.Collections.Generic;
using System.Linq;

namespace cs_loops
{
    class Program
    {
        static void Main(string[] args)
        {
            // This will do the loop 10 times
            var counter = 0;
            while (counter < 10)
            {
                Console.WriteLine($"Doing something {counter}");

                counter++;
            }
            Console.WriteLine("I'm the code that happens after the while loop");

            // This will also do something 10 times.
            for (var index = 0; index < 10; index++)
            {
                Console.WriteLine($"The loop is doing something and index = {index}");
            }

            Console.WriteLine("I'm the code that happens after the for loop");

            // Make a List of strings
            var names = new List<string>() { "Mark", "Paula", "Sandy", "Bill" };

            Console.WriteLine($"There are {names.Count()} names in our list");
            names.Add("George");
            Console.WriteLine($"There are {names.Count()} names in our list");

            // Get the First (index 0) name from that list
            var firstName = names[0];
            Console.WriteLine($"The first name in the list is {firstName}");

            Console.WriteLine();
            Console.WriteLine("------------------------------------------\n\n\n");

            // Loop through all of the names in the list.
            // -- Well, we know that lists are accessible by an index, and they start at 0
            // -- We also know how many there are by using Count()
            //
            // Start at index 0
            // Get the name at the current index
            // Print the name
            // Go to the next index
            // If we haven't gotten to the end of the list, go back to the "get the name" step

            for (var index = 0; index < names.Count(); index++)
            {
                // Get the name at the current index
                var currentName = names[index];
                Console.WriteLine($"The person {currentName} is in our list");
            }

            // Goodbye Bill
            names.Remove("Bill");

            Console.WriteLine("After removing Bill:");

            for (var index = 0; index < names.Count(); index++)
            {
                // Get the name at the current index
                var currentName = names[index];
                Console.WriteLine($"The person {currentName} is in our list");
            }

        }
    }
}
