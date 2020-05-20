using System.Collections.Generic;
using System.Linq;

namespace PetAdoption
{
    class PetsController
    {
        private List<Pet> Pets = new List<Pet>();

        // Give back the list of pets
        public IEnumerable<Pet> AllPets()
        {
            return Pets.OrderBy(pet => pet.Name);
        }

        // Given a name of a pet, return the first pet with that name, or null if nothing found
        public Pet FindPetByName(string name)
        {
            var foundPet = Pets.FirstOrDefault(pet => pet.Name == name);

            return foundPet;
        }

        // Given a pet, adopt it out
        public void AdoptOut(Pet petToAdoptOut)
        {
            // .. by removing it from our list.
            Pets.Remove(petToAdoptOut);
        }

        // Update the given Pet to the given size
        public void Update(Pet petToUpdate, string size)
        {
            petToUpdate.Size = size;
        }

        // Given arguments (6 of them) that represent all the data for a pet
        // make a new pet and add it to the database
        public void AddNewPet(string name, string species, string gender, int age, string color, string size)
        {
            var newPet = new Pet
            {
                Age = age,
                Color = color,
                Gender = gender,
                Name = name,
                Size = size,
                Species = species,
            };

            Pets.Add(newPet);
        }

        public void Seed()
        {
            // Add some pets to our database of pets

            // | Species | Gender | Age | Name    | Color  | Size   |
            // | ------- | ------ | --- | ------- | ------ | ------ |
            // | Dog     | Female | 1   | Sadie   | Blonde | Medium |
            var sadie = new Pet
            {
                Name = "Sadie",
                Species = "Dog",
                Gender = "Female",
                Age = 1,
                Color = "Blonde",
                Size = "Medium",
            };

            // | Cat     | Male   | 3   | Russell | Black  | Small  |
            var russell = new Pet
            {
                Name = "Russell",
                Species = "Cat",
                Gender = "Male",
                Age = 3,
                Color = "Black",
                Size = "Small",
            };

            // | Dog     | Male   | 3   | Kodak   | White  | Large  
            var kodak = new Pet
            {
                Name = "Kodak",
                Species = "Dog",
                Gender = "Male",
                Age = 3,
                Color = "White",
                Size = "Large",
            };

            Pets.Add(sadie);
            Pets.Add(russell);
            Pets.Add(kodak);
        }
    }
}
