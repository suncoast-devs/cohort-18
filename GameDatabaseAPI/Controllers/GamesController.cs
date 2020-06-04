using System.Collections.Generic;
using System.Linq;
using GameDatabaseAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GameDatabaseAPI.Controllers
{
    // We are a JSON style API
    // and we live at "/games"
    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase
    {
        // This is the database context we can use
        // from any Http method we write.
        private readonly DatabaseContext _context;

        // Constructor
        public GamesController(DatabaseContext context)
        {
            // Save away the given context (from the arguments)
            // into our _context

            _context = context;
        }

        // Get all the games in our database
        [HttpGet]
        public ActionResult<IEnumerable<Game>> GetAll()
        {
            var allTheGames = _context.Games;


            return Ok(allTheGames);
        }

        // Get one specific Game
        // 1. Whats the input? -- a specific ID
        // 2. Whats the format? -- in the URL parameters
        //    /Games/25     /Games/42
        // 3. What is it called /Games/{id}  -- call the method GetByID
        // 4. What does it return? A single Game
        // 5. Whats the format? JSON
        [HttpGet("{id}")]
        public ActionResult<Game> GetByID(int id)
        {
            // Use LINQ to go through the games finding a game with the specified ID
            var game = _context.Games.FirstOrDefault(game => game.Id == id);

            // If we don't find it... Return a 404 not found to the user
            //
            // This is a GUARD clause
            if (game == null)
            {
                // Give back a 404 error
                return NotFound();
            }

            // If we do find it, return the game itself.
            return Ok(game);
        }
    }
}