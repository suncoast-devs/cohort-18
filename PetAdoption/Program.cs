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
        }
    }
}
