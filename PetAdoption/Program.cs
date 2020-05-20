using System;

namespace PetAdoption
{
    class Program
    {
        static string PromptForString(string prompt)
        {
            Console.Write(prompt);
            var userInput = Console.ReadLine();

            return userInput;
        }

        static int PromptForInteger(string prompt)
        {
            Console.Write(prompt);
            int userInput;
            var isThisGoodInput = Int32.TryParse(Console.ReadLine(), out userInput);

            if (isThisGoodInput)
            {
                return userInput;
            }
            else
            {
                Console.WriteLine("Sorry, that isn't a valid input, I'm using 0 as your answer.");
                return 0;
            }
        }


        static void Main(string[] args)
        {
            // Welcome the user to the application
            Console.WriteLine();
            Console.WriteLine("Welcome to our Pet Adoption site, come on in and find a new friend.");
            Console.WriteLine();

            var userHasChosenToQuit = false;

            // While the user hasn't quit the application
            while (userHasChosenToQuit == false)
            {
                // Show them a menu of options they can do
                Console.WriteLine("Choose:");
                // - Add a new pet
                Console.WriteLine("(A)dd a new pet");
                // - See all the pets up for adoption
                Console.WriteLine("(S)ee all the pets");
                // - Input a name of a pet that has been adopted to remove them from the list
                Console.WriteLine("A(d)opt out a pet");
                // - Input a name of a pet and update their size
                Console.WriteLine("(U)pdate a pet");
                // - Quit the application
                Console.WriteLine("(Q)uit the application");
                Console.WriteLine();

                var choice = PromptForString("Choice: ");

                // - If the user entered quit, then mark that they have chosen to Quit
                if (choice == "Q")
                {
                    userHasChosenToQuit = true;
                }

            }
        }
    }
}
