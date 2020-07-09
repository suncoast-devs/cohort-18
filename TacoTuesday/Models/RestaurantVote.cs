namespace TacoTuesday.Models
{
    public class RestaurantVote
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int RestaurantId { get; set; }
        public string UpOrDown { get; set; }
    }
}