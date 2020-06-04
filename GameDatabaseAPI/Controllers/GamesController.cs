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



    }
}