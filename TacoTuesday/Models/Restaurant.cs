using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TacoTuesday.Models
{
    public class Restaurant
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public string Address { get; set; }

        public string Telephone { get; set; }

        public int UserId { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public string PhotoURL { get; set; }

        // Add a property that is the list of associated reviews
        public List<Review> Reviews { get; set; }

        // This won't be allowed from another class (say a controller)
        // someRestaurantObject.UpvoteCount = 5
        //
        // This is allowed
        // Console.WriteLine(someRestaurantObject.UpvoteCount)
        //
        public int UpvoteCount { get; private set; } = 0;
        public void IncrementUpvoteCount()
        {
            this.UpvoteCount++;
        }

        public int DownvoteCount { get; private set; } = 0;
        public void IncrementDownvoteCount()
        {
            this.DownvoteCount++;
        }
    }
}