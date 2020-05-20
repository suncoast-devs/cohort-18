using System.Linq;

namespace PetAdoption
{

    class Program
    {

        static void Main(string[] args)
        {
            // Create a new object that manages our pets
            var petsController = new PetsController();
            petsController.Seed();

            // Creates a new object that represent interacting with our users
            var frontEnd = new FrontEnd(petsController);
            frontEnd.Greeting();
            frontEnd.Menu();


            //     if (choice == "U")
            //     {
            //         // PEDAC
            //         //
            //         // Problem - Given a pet's name, find that pet in our list, if found
            //         //           ask for a new size and update the pet.
            //         //
            //         // Example:
            //         // Name of pet to update: Sadie
            //         // -- print out sadie's details
            //         // New size for Sadie: Large
            //         //
            //         // Data
            //         //
            //         // Pet name (string), List, finding helper, string (new size)
            //         //
            //         // Algorithm
            //         //
            //         // Prompt for the name of the pet
            //         var nameOfPetToFind = PromptForString("Name of pet being adopted: ");
            //         // Use a searching function to find the pet
            //         var foundPet = listOfPets.FirstOrDefault(pet => pet.Name == nameOfPetToFind);

            //         // If it is not found, say not found
            //         if (foundPet == null)
            //         {
            //             Console.WriteLine($"There is no pet named {nameOfPetToFind}");
            //         }
            //         else
            //         {
            //             // else
            //             // - print the details
            //             var foundPetDescription = foundPet.Description();
            //             Console.WriteLine(foundPetDescription);

            //             // - ask for a new size
            //             var newPetSize = PromptForString("New size: ");

            //             // - update the pet
            //             foundPet.Size = newPetSize;
            //         }
            //     }

            //     if (choice == "d")
            //     {
            //         // PEDAC
            //         //
            //         // Problem - Given a pet's name, find that pet in our list and remove it to indicate it has been adopted out.
            //         //
            //         // Example:
            //         // Sadie, Russell, Kodak
            //         // Name of pet being adopted: Kodak
            //         // -- find and remove --
            //         // Sadie, Russell
            //         //
            //         // Data
            //         // - Name of the pet, string
            //         // - List of pets
            //         // - Searching helper...
            //         //
            //         // Algorithm
            //         // - Prompt for the name of the pet
            //         var nameOfPetToFind = PromptForString("Name of pet being adopted: ");

            //         // - Use a searching function to find the pet
            //         // - Where
            //         // - Find
            //         // - First
            //         var foundPet = listOfPets.FirstOrDefault(pet => pet.Name == nameOfPetToFind);

            //         // - If there is no pet found, inform the user and return
            //         if (foundPet == null)
            //         {
            //             Console.WriteLine($"There is no pet named {nameOfPetToFind}");
            //         }
            //         else
            //         {
            //             // - Show the found pet and confirm this is the right one
            //             var foundPetDescription = foundPet.Description();
            //             Console.WriteLine(foundPetDescription);

            //             var shouldWeAdoptOut = PromptForString("Sure you want to adopt this pet out? (Y/N): ");

            //             if (shouldWeAdoptOut == "Y")
            //             {
            //                 // - if yes Remove the found pet from the list
            //                 listOfPets.Remove(foundPet);
            //             }
            //         }
            //     }

            //     if (choice == "A")
            //     {
            //         // PEDAC
            //         //
            //         // Problem - Gather all the information about a pet, create a new pet and add them to the list.
            //         //
            //         // Example:
            //         // Name: ____
            //         // Species: ___
            //         // Gender: ____
            //         // Age: ____
            //         // Color: ___
            //         // Size: ___
            //         //
            //         // Data:
            //         //
            //         // Strings and int for our inputs, a new Pet, and our List
            //         //
            //         // Algorithm:
            //         //
            //         // Prompt for Name
            //         var newName = PromptForString("Name: ");
            //         // Prompt for Species
            //         var newSpecies = PromptForString("Species: ");
            //         var newGender = PromptForString("Gender: ");
            //         var newAge = PromptForInteger("Age: ");
            //         var newColor = PromptForString("Color: ");
            //         var newSize = PromptForString("Size: ");

            //         // ...
            //         // Use these bits of information to create a new pet
            //         var newPet = new Pet
            //         {
            //             Age = newAge,
            //             Color = newColor,
            //             Gender = newGender,
            //             Name = newName,
            //             Size = newSize,
            //             Species = newSpecies,
            //         };
            //         // append that new pet to the list
            //         listOfPets.Add(newPet);
            //     }

            //     if (choice == "S")
            //     {
            //         Console.WriteLine("Here are all the pets");
            //         // PEDAC
            //         //
            //         // p - Print out all the pets to the user
            //         //   - Is there an order? Maybe just in the list order?
            //         // E - is our list of three pets. Sadie, Russell, and Kodak
            //         //
            //         // Name is a Gender Size Color Species that is Age years old.
            //         // Sadie is a Female Medium Blonde Dog that is 1 years old.
            //         // Russell is a Male Small Black Cat that is 3 years old.
            //         //
            //         //  D - List of pets, and an individual pet.
            //         //
            //         //  A
            //         //    - For each pet in our list of pets
            //         //      - Print out the details of that pet according our example

            //         //    - For each pet in our list of pets
            //         foreach (var pet in listOfPets)
            //         {
            //             //      - Print out the details of that pet according our example
            //             var description = pet.Description();
            //             Console.WriteLine(description);

            //         }

            //     }
            // }
        }
    }
}
