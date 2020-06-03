using System;
using System.Linq;

namespace StringsAsArraysAndLists
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = "RqaEzty";

            foreach (var someLetterInTheStringThatWantToPrint in input)
            {
                Console.WriteLine(someLetterInTheStringThatWantToPrint);
            }

            for (var index = 0; index < input.Length; index++)
            {
                var letterAtIndex = input[index];

                Console.WriteLine($"The character at position {index} is {letterAtIndex}");
            }

            var lettersAsACharacterArray = input.ToCharArray();
            for (var index = 0; index < input.Length; index++)
            {
                var letterAtIndex = lettersAsACharacterArray[index];

                Console.WriteLine($"The character at position {index} is {letterAtIndex}");
            }

            var charactersTransformed = input.Select(character => $"{character}");
            foreach (var someString in charactersTransformed)
            {
                Console.WriteLine(someString);
            }
        }
    }
}
