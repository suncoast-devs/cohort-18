using System.Collections.Generic;
using System.Linq;
using GameDatabaseAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

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
        public async Task<ActionResult<IEnumerable<Game>>> GetAllAsync()
        {
            var allTheGames = await _context.Games.ToListAsync();


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
        public async Task<ActionResult<Game>> GetByIDAsync(int id)
        {
            var game = await FindGameAsync(id);

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

        // Create a game
        // 1. What do we input? -- details of a new game
        // 2. What is the format? -- JSON in the *BODY* of the request
        // 3. What is the name?  POST /Games
        // 4. What is the result? The new game saved in the database
        // 5. What is the format? JSON + Status
        //
        // BODY: JSON structure like
        //       { 
        //         "name": "Ticket To Ride",
        //         "host": "Bill",
        //         "address": "123 Main Street",
        //         "when": "2020-12-25T20:05",
        //         "minimumPlayers": 2,
        //         "maximumPlayers": 6
        //       } 
        //
        [HttpPost]
        //     Response
        //     |                         Deserialized from the client BODY of the *REQUEST*
        //     |                         |
        //     v                         v
        public async Task<ActionResult<Game>> CreateAsync(Game gameToCreate)
        {
            if (gameToCreate.MinimumPlayers < 2)
            {
                // If the min # of players < 2, error
                var errorMessage = new
                {
                    message = $"You only requested {gameToCreate.MinimumPlayers} but we need at least 2."
                };

                return UnprocessableEntity(errorMessage);
            }

            if (gameToCreate.MaximumPlayers > 20)
            {
                // If the max # of players > 20, error
                var errorMessage = new { message = $"You requested {gameToCreate.MaximumPlayers} but we can only support up to 20" };

                return UnprocessableEntity(errorMessage);
            }

            if (gameToCreate.MaximumPlayers < gameToCreate.MinimumPlayers)
            {
                // If the maximum players < minimum # players, error

                // Make a generic object containing just a message property
                var errorMessage = new { message = $"Ooops, you specified a maximum number of players that is less than the minimum number" };

                // Return a 422 error and supply a nice message
                return UnprocessableEntity(errorMessage);
            }

            // Take this new game object and add it to the database
            _context.Games.Add(gameToCreate);
            await _context.SaveChangesAsync();

            // return the game object
            //
            //     Generate a 201
            //     |
            //     |                           The game we created
            //     |                           |
            //     v                           v
            return CreatedAtAction(null, null, gameToCreate);
        }

        // Updating a game
        [HttpPut("{id}")]
        //                               URL parameter
        //                               |
        //                               |       Body
        //                               |       |
        //                               v       v
        public async Task<ActionResult<Game>> UpdateAsync(int id, Game gameThatCameFromTheClient)
        {
            if (id != gameThatCameFromTheClient.Id)
            {
                var errorMessage = new { message = $"The id in the URL ({id}) doesn't match the id in the body ({gameThatCameFromTheClient.Id})" };
                return BadRequest(errorMessage);
            }

            // Tell the context we updated this game.
            _context.Entry(gameThatCameFromTheClient).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            // Give back a copy of the object
            return Ok(gameThatCameFromTheClient);
        }

        // Delete a game
        [HttpDelete("{id}")]
        public async Task<ActionResult<Game>> DeleteAsync(int id)
        {
            // Use LINQ to look through our game list to find a game
            // with the specified ID.
            var foundGame = await FindGameAsync(id);

            // If FirstOrDefault returned null it means nothing was
            // found so return a 404 to the user
            if (foundGame == null)
            {
                return NotFound();
            }

            _context.Games.Remove(foundGame);
            await _context.SaveChangesAsync();

            return Ok(foundGame);
        }

        // Given an ID, return a Game if found, otherwise null
        private async Task<Game> FindGameAsync(int id)
        {
            var foundGame = await _context.Games.FirstOrDefaultAsync(game => game.Id == id);

            return foundGame;
        }
    }
}