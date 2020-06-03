using System;
using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiceController : ControllerBase
    {
        // This is a GET request, but there is more in the URL
        //
        //        This is the more of the URL
        //        |
        //        |
        //        v
        [HttpGet("{sides}")]
        // Examples:
        //    GET /Dice/6       <= sides = 6
        //    GET /Dice/20      <= sides = 20
        public int Roll(int sides)
        {
            var randomNumberGenerator = new Random();

            // generate a random number between 1 and sides (inclusive)
            // example: between 1 and 6
            // example: between 1 and 20

            var roll = randomNumberGenerator.Next(sides) + 1;

            return roll;
        }
    }
}