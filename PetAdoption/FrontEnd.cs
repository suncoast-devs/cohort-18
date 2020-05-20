using System;

namespace PetAdoption
{
    class FrontEnd
    {
        private PetsController OurPetsController;

        // Constructor, it is called when we do `new Fronted(...)`
        public FrontEnd(PetsController petsControllerToUse)
        {
            OurPetsController = petsControllerToUse;
        }

        public string PromptForString(string prompt)
        {
            Console.Write(prompt);
            var userInput = Console.ReadLine();

            return userInput;
        }

        public int PromptForInteger(string prompt)
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

        public void Greeting()
        {
            // Welcome the user to the application
            Console.WriteLine();
            Console.WriteLine($"Welcome to our Pet Adoption site, come on in and find a new friend from our pets.");
            Console.WriteLine();
        }

        public void Menu()
        {
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

                switch (choice)
                {
                    case "A":
                        var petNameForNewPet = PromptForString("Name: ");
                        var newSpecies = PromptForString("Species: ");
                        var newGender = PromptForString("Gender: ");
                        var newAge = PromptForInteger("Age: ");
                        var newColor = PromptForString("Color: ");
                        var newSize = PromptForString("Size: ");

                        OurPetsController.AddNewPet(petNameForNewPet, newSpecies, newGender, newAge, newColor, newSize);

                        break;

                    case "S":
                        var pets = OurPetsController.AllPets();

                        foreach (var pet in pets)
                        {
                            var description = pet.Description();
                            Console.WriteLine(description);
                        }

                        break;

                    case "d":
                        break;

                    case "U":
                        break;

                    case "Q":
                        userHasChosenToQuit = true;
                        break;
                }
            }
        }
    }
}
