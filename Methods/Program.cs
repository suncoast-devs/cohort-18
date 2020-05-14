using System;

namespace Methods
{
    class Program
    {
        // Define the method DisplayGreeting
        static void DisplayGreeting()
        {
            Console.WriteLine("--------------------------------");
            Console.WriteLine("Welcome to Our Employee Database");
            Console.WriteLine("--------------------------------");
            Console.WriteLine();
            Console.WriteLine();
        }

        static string PromptForString(string prompt)
        {
            // Send the given prompt to the console
            Console.Write(prompt);

            // Get a string from the user
            var userInput = Console.ReadLine();

            // Send that back!
            return userInput;
        }

        static int PromptForInteger(string prompt)
        {
            // Prompt for input
            Console.Write(prompt);

            // Variable to receive parsed number from TryParse
            int userInput;

            // Try to parse the input from ReadLine. If successfull, the variable
            // userInput will have the integer. If a failure, isThisGoodInput will
            // be FALSE.
            var isThisGoodInput = int.TryParse(Console.ReadLine(), out userInput);

            // If we had good input
            if (isThisGoodInput)
            {
                // Return back the actual integer input
                return userInput;
            }
            else
            {
                // Otherwise (isThisGoodInput was false), we got bad input.

                // Show an error message
                Console.WriteLine("Sorry, that isn't a valid input, I'm using 0 as your answer.");

                // Return 0
                return 0;
            }
        }


        static void Main(string[] args)
        {
            // Ask DisplayGreeting method to do it's work
            DisplayGreeting();

            // Console.Write("What is your name? ");
            // var name = Console.ReadLine();
            var name = PromptForString("What is your name? ");

            // Console.Write("What is your department number? ");
            // var department = int.Parse(Console.ReadLine());
            var department = PromptForInteger("What is your department number? ");

            // Console.Write("What is your yearly salary (in dollars)? ");
            // var salary = int.Parse(Console.ReadLine());
            var salary = PromptForInteger("What is your salary, yo, give it in dollars? ");

            var salaryPerMonth = salary / 12;
            Console.WriteLine($"Hello, {name} you make {salaryPerMonth} a month.");
        }
    }
}
