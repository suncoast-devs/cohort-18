using System;

namespace TacoTuesday.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Summary { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.Now;

        // A review BELONGS TO a restaurant, so we have to define the RestaurantId (foreign key)
        // that says what restaurant this is for
        public int RestaurantId { get; set; }
    }
}