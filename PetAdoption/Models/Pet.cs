namespace PetAdoption
{
    class Pet
    {
        // - Species (Cat, Dog, Bird) - string
        public string Species { get; set; }

        // - Gender - string
        public string Gender { get; set; }

        // - Age - int
        public int Age { get; set; }

        // - Name - string
        public string Name { get; set; }

        // - Color - string
        public string Color { get; set; }

        // - Size - string
        public string Size { get; set; }

        // Method
        // Name -- Description
        // Input from the outside world -- none
        // Output -- string
        // Work -- we know, build up the string

        public string Description()
        {
            var myOwnDescription = $"{Name} is a {Gender} {Size} {Color} {Species} that is {Age} years old.";

            return myOwnDescription;
        }


    }
}
