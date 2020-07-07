using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TacoTuesday.Models;

namespace TacoTuesday.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantVotesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public RestaurantVotesController(DatabaseContext context)
        {
            _context = context;
        }

        // Up or down votes a specific restaurant
        //
        // Allow us to specify the restaurant id
        // and a string to indicate if this is an up or downvote
        //
        // Examples:   /api/RestaurantVotes/42/upvote
        // Examples:   /api/RestaurantVotes/100/downvote
        [HttpPost("{id}/{upOrDown}")]
        public async Task<IActionResult> PostRestaurantVote(int id, string upOrDown)
        {
            // Find the restaurant in the database using `FindAsync` to look it up by id
            var restaurant = await _context.Restaurants.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (restaurant == null)
            {
                // Return a `404` response to the client indicating we could not find a restaurant with this id
                return NotFound();
            }

            switch (upOrDown)
            {
                case "upvote":
                    restaurant.IncrementUpvoteCount();
                    break;
                case "downvote":
                    restaurant.IncrementDownvoteCount();
                    break;
                default:
                    return BadRequest();
            }

            // Tell the database to consider everything in restaurant to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from restaurant
            _context.Entry(restaurant).State = EntityState.Modified;

            // Try to save these changes.
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done.
            return NoContent();
        }
    }
}