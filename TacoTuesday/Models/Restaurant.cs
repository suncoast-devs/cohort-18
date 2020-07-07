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